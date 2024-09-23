import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


function Login() {

    const initialValues1 = {
        email: '',
        password: '',
      };
    
      const validationSchema1 = Yup.object().shape({
        email: Yup.string().required('Required'),
        password: Yup.string()
        .required('No password provided.') 
        .min(8, 'Password is too short - should be 8 chars minimum.')
        .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
      });

    return (
       <>
       <Formik
            initialValues={initialValues1}
            validationSchema={validationSchema1}
            onSubmit={(values, { setSubmitting }) => {
              console.log('Formulario 1 enviado:', values);
              setSubmitting(false);
            }}
          >
            {({ isSubmitting }) => (
              <Form > 
                <div className="form-group">
                <label htmlFor="email">Email:</label>
                <Field type="email" name="email" placeholder="Enter your email"/>
                <ErrorMessage name="email" component="div" />

                <label htmlFor="password">Password:</label>
                <Field type="password" name="password" />
                <ErrorMessage name="password" component="div" />

                <button type="submit" disabled={isSubmitting}>
                  Enviar
                </button>
                </div>
              </Form>
            )}
          </Formik>
    </>
     );
   }
   
   export default Login;