import React from 'react'
import { Formik, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

import formJson from '../data/custom-form.json'
import "../styles/styles.css";
import { MyCheck, MySelect, MyTextInput } from '../components';


const initialValues:{ [key:string]:any } = {}
const requiredFields:{ [key:string]:any } = {}

for (const field of formJson) {

  initialValues[field.name] = field.value

  if (!field.validations ) continue;

  let schema = Yup.string()

  for (const rule of field.validations) {
    if (rule.type === 'required') {
      schema = schema.required(rule.message)
    }
    if (rule.type === 'minLength') {
      schema = schema.min((rule as any).value, rule.message)
    }
    if (rule.type === 'maxLength') {
      schema = schema.max((rule as any).value, rule.message)
    }
    if (rule.type === 'pattern') {
      schema = schema.matches((rule as any).value, rule.message)
    }
    if (rule.type === 'email') {
      schema = schema.email(rule.message)
    }
    if (rule.type === 'mustMatch') {
      schema = schema.oneOf([Yup.ref((rule as any).value)], rule.message)
    }



  }
  requiredFields[field.name] = schema

}

const validationSchema = Yup.object({...requiredFields})


const DynamicForm = () => {
  return (
    <div>
      <h1>DynamicForm</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values)
        }}
      >
        
        {
          (formik) => (
            <Form>
              {
                formJson.map((field) => {
                    if (field.type === 'text' || field.type === 'email' || field.type === 'password') {
                      return (<MyTextInput 
                      key={field.name}
                      label={field.label}
                      name={field.name}
                      type={field.type as any}
                      placeholder={field.placeholder}
                    />)
                    }else if (field.type === 'checkbox') {
                      return (<MyCheck 
                        key={field.name}
                        label={field.label}
                        name={field.name}
                        type={field.type as any}
                        placeholder={field.placeholder}
                      />)

                    }else if (field.type === 'select') {
                      return (<MySelect 
                        key={field.name}
                        label={field.label}
                        name={field.name}
                        type={field.type as any}
                      >
                        {field.options?.map((option) => 
                           {return (<option key={option.id} value={option.id}>{option.label}</option>)}
                        )}
                      </MySelect>)
                    } else if(field.type === 'button' && field.name === 'reset'){
                      
                      return (<button key={field.name} type="reset" onClick={formik.handleReset}>Reset</button>)
                    } else if(field.type === 'button' && field.name === 'submit'){
                  
                      return (<button key={field.name} type="submit">Enviar</button>)
                    }
                    
                    throw new Error('Invalid type')
                })
              }
            </Form>
          )
        }
      </Formik>
    </div>
  )
}

export default DynamicForm
