import React from 'react'
import {useFormik} from 'formik'

const initialValues={
    name:'Edwin',
    email:'',
    channel:''
}

const onSubmit = values => {
    console.log('form data',values);

}

const validate = values => {
    let errors = {}
    if(!values.name){
        errors.name='Required'
    }
    if(!values.email){
        errors.email='Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Formato invalido'
    }
    if(!values.channel){
        errors.channel='Required'
    }

    return errors
}

function YouTubeForm() {    

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    })

    //console.log('form values: ' , formik.values);

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="name">Nombre</label>
                <input type="text" id="name" name="name" onChange={formik.handleChange} value={formik.values.name}/>

                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" name="email" onChange={formik.handleChange} value={formik.values.email}/>

                <label htmlFor="channel">Canal</label>
                <input type="text" id="channel" name="channel" onChange={formik.handleChange} value={formik.values.channel}/>

                <button type="submit">Submit</button>
            </form>
            
        </div>
    )
}

export default YouTubeForm