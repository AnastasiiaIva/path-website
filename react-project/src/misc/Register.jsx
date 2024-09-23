import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


function Register() {

    
      const initialValues2 = {
        address: '',
        city: '',
      };
    
      const validationSchema2 = Yup.object().shape({
        address: Yup.string().required('Required'),
        city: Yup.string().required('Required'),
      });

    return (
       <>
       <Formik
            initialValues={initialValues2}
            validationSchema={validationSchema2}
            onSubmit={(values, { setSubmitting }) => {
              console.log('Formulario 2 enviado:', values);
              setSubmitting(false);
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="form-group">
                <label htmlFor="address">Dirección:</label>
                <Field type="text" name="address" />
                <ErrorMessage name="address" component="div" />

                <label htmlFor="city">Ciudad:</label>
                <Field type="text" name="city" />
                <ErrorMessage name="city" component="div" />

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
   
   export default Register;