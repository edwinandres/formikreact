import React from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup'

const initialValues={
    name:'Edwin',
    email:'',
    channel:''
}

const onSubmit = values => {
    console.log('form data',values);

}

// const validate = values => {
//     let errors = {}
//     if(!values.name){
//         errors.name='El nombre es requerido'
//     }
//     if(!values.email){
//         errors.email='Required'
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//         errors.email = 'Formato de correo invalido'
//     }
//     if(!values.channel){
//         errors.channel='Required'
//     }

//     return errors
// }

const validationSchema = Yup.object({
    name: Yup.string().required('Requerido!'),
    email: Yup.string().email("Formato email invalido").required('Requerido!'),
    channel: Yup.string().required('Requerido!')
})

function YouTubeFormYup() {    

    const formik = useFormik({
        initialValues,
        onSubmit,        
        validationSchema
        //validate
    })

    console.log('Visited fields: ' , formik.touched);

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className='form-control'>
                    <label htmlFor="name">Nombre</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        onChange={formik.handleChange} 
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                    />
                    {formik.touched.name && formik.errors.name ? <div className='error'>{formik.errors.name}</div>: null}
                </div>

                <div className='form-control'>
                    <label htmlFor="email">E-mail</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        onChange={formik.handleChange} 
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? <div className='error'>{formik.errors.email}</div>: null}
                </div>

                <div className='form-control'>
                    <label htmlFor="channel">Canal</label>
                    <input 
                        type="text" 
                        id="channel" 
                        name="channel" 
                        onChange={formik.handleChange} 
                        onBlur={formik.handleBlur}
                        value={formik.values.channel}
                    />
                    {formik.touched.channel && formik.errors.channel ? <div className='error'>{formik.errors.channel}</div>: null}
                </div>


                <button type="submit">Submit</button>
            </form>
            
        </div>
    )
}

export default YouTubeFormYup