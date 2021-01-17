

import React from 'react';
import { Formik } from 'formik'
import * as Yup from 'yup'
import Error from './Error';

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .min(1, "Se necesita al menos un caracter")
        .max(255, "No debe ser mayor a 255 caracteres")
        .required("Debe ingresar un nombre"),
    email: Yup.string()
        .email("No es un correo valido")
        .max(255, "No debe ser mayor a 255 caracteres")
        .required("Debe ingresar un email"),
})

export default function FormikForm (){
    return(
        <Formik 
            initialValues={{name:"", email:""}}
            validationSchema={validationSchema}
            onSubmit={(values,{setSubmitting, resetForm}) => {
                setSubmitting(true)

                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2))
                    resetForm()
                    setSubmitting(false)

                },500)
            }}
        >
            {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                
                <form onSubmit={handleSubmit}>
                    
                    <div className="input-row">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Escriba su nombre aqui"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                            className={touched.name && errors.name ? "has-error": null}
                        />
                        <Error touched={touched.name} message={errors.name}/>

                    </div>

                    <div className="input-row">
                        <label htmlFor="name">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Escriba su email aqui"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            className={touched.email && errors.email ? "has-error": null}
                        />
                        <Error touched={touched.email} message={errors.email}/>


                    </div>

                    <div className="input-row">
                        <button type="submit" disabled={isSubmitting}>Enviar</button>
                    </div>
                </form>

            )}
        </Formik>
    )

}