import React from 'react'
import {Formik, Form, Field, ErrorMessage, FieldArray} from 'formik'
import * as Yup from 'yup'
import TextError from './TextError'

const initialValues={
    name:'Edwin',
    email:'',
    channel:'',
    comments:'',
    address:'',
    social:{
        facebook:'',
        twitter:''
    },
    phoneNumbers:['',''],
    phNumbers: ['']
}

const onSubmit = values => {
    console.log('form data',values);

}

const validationSchema = Yup.object({
    name: Yup.string().required('Requerido!'),
    email: Yup.string().email("Formato email invalido").required('Requerido!'),
    channel: Yup.string().required('Requerido!')
})

function YouTubeFormFormikComponent() {    

    

    //console.log('Visited fields: ' , formik.touched);

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            <Form >
                <div className='form-control'>
                    <label htmlFor="name">Nombre</label>
                    <Field  type="text" id="name" name="name" />
                    <ErrorMessage name='name' component={TextError}/>
                </div>

                <div className='form-control'>
                    <label htmlFor="email">E-mail</label>
                    <Field type="email" id="email" name="email"  />
                    <ErrorMessage name='email'>
                        {(errorMsg) => <div className='error'>{errorMsg}</div>}
                    </ErrorMessage>
                </div>

                <div className='form-control'>
                    <label htmlFor="channel">Canal</label>
                    <Field type="text" id="channel" name="channel" />
                    <ErrorMessage name='channel'/>
                </div>

                <div className='form-control'>
                    <label htmlFor='comments'>Comentarios</label>
                    <Field as='textarea' id='comments' name='comments'/>
                </div>

                <div className='form-control'>
                    <label htmlFor='address'>Direccion</label>
                    <Field as='textarea' id='address' name='address' >
                        {(props)=>{
                            const {field, form, meta}= props
                            console.log('render props', props);
                            return (
                                <div>
                                    <input type='text' id='address' {...field}/>
                                    {meta.touched && meta.error ? <div>{meta.error}</div>:null}
                                </div>
                            )
                            
                        }}
                    </Field>
                </div>

                <div className='form-control'>
                    <label htmlFor='facebook'>Facebook profile</label>
                    <Field type='text' id='facebook' name='social.facebook'  />
                </div>

                <div className='form-control'>
                    <label htmlFor='twitter'>Twitter profile</label>
                    <Field type='text' id='twitter' name='social.twitter'  />
                </div>

                <div className='form-control'>
                    <label htmlFor='primaryPh'>Primer telefono</label>
                    <Field type='text' id='primaryPh' name='phoneNumbers[0]'  />
                </div>
                <div className='form-control'>
                    <label htmlFor='secondaryPh'>Segundo Telefono</label>
                    <Field type='text' id='secondaryPh' name='phoneNumbers[1]'  />
                </div>

                <div className='form-control'>
                    <label>Lista de de numeros telefonicos</label>
                    <FieldArray name='phNumbers'>
                        {(fieldArrayProps) => {
                            console.log('fieldArrayProps', fieldArrayProps);
                            const {push, remove, form}=fieldArrayProps
                            const {values} = form
                            const { phNumbers} = values
                            return <div>
                                {phNumbers.map((phNumber, index)=>(
                                    <div key={index}>
                                        <Field name={`phNumbers[${index}]`}/>
                                        {index > 0 && (
                                            <button type='button' onClick={()=> remove(index)}>{' '} - {' '} </button>

                                        )}
                                        <button type='button' onClick={()=>push('')}> + </button>
                                    </div>
                                ))}
                            </div>
                        }}
                    </FieldArray>
                </div>


                <button type="submit">Submit</button>
            </Form>
            
        </Formik>
    )
}

export default YouTubeFormFormikComponent