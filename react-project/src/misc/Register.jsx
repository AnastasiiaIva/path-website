
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';


function Register() {

  const [user, setUser] = useState({ email: '', password: '' });


  const handleSubmit = () => {
    fetch('http://localhost:8080/api/v1/users/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
    .then(response => response.json())
    .then(data => console.log('User created:', data))
    .catch(error => console.error('Error creating user:', error));
  };

  const handleChange = (event) => {
    const { email, value } = event.target;
    setUser(prevUser => ({ ...prevUser, [email]: value }));
  };
    
      const initialValues2 = {
        email: '',
        password: '',
      };
    
      const validationSchema2 = Yup.object().shape({
        email: Yup.string().required('Required'),
        password: Yup.string()
        .required('No password provided.') 
        .min(8, 'Password is too short - should be 8 chars minimum.')
        .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
        passwordConfirmation: Yup.string()
     .oneOf([Yup.ref('password'), null], 'Passwords must match')
      });

    return (
       <>
       <Formik
            initialValues={initialValues2}
            validationSchema={validationSchema2}
            onSubmit={handleSubmit}/* {(values, { setSubmitting }) => {
              console.log('Formulario 2 enviado:', values);
              setSubmitting(false);
            }} */
          >

              <Form>
                <div className="form-group">
                <label value={user.email}
        onChange={handleChange} htmlFor="email">Email:</label>
                <Field type="email" name="email"   placeholder="Enter your email"/>
                <ErrorMessage name="email" component="div" />

                <label htmlFor="password">Password:</label>
                <Field type="password" name="password" />
                <ErrorMessage name="password" component="div" />

                <label htmlFor="password">Confirm Password:</label>
                <Field type="password" name="passwordConfirmation" />
                <ErrorMessage name="passwordConfirmation" component="div" />

                <button type="submit" >
                  Enviar
                </button>
                </div>
              </Form>
          </Formik>
    </>
     );
   }
   
   export default Register;