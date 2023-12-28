

import React from 'react'
import '../styles/styles.css'
import { useForm } from '../hooks/useForm'

export const RegisterPage = () => {

    const {formData, onChange, resetForm, isValidEmail} = useForm({
        name:'',
        email:'',
        password:'',
        password2:''
    })
    
    const {name,email,password,password2} = formData

    const onSubmit = ( ev:React.FormEvent<HTMLFormElement> )=>{
        ev.preventDefault()

    }


  return (
    <div>
      <h1>RegisterPage</h1>
      <form action="" noValidate onSubmit={(ev)=>onSubmit(ev)}>
        <input type="text" placeholder="Name" name='name' value={name} onChange={(ev)=>onChange(ev)} className={`${name.trim().length <= 0 && 'has-error'}`} />
        {name.trim().length <= 0 && <span>Name is required</span>}
        <input type="email" placeholder="Email" name='email' value={email} onChange={onChange} className={`${!isValidEmail(email) && 'has-error'}`} />
        { !isValidEmail(email) && <span>Email no valid</span>}
        <input type="password" placeholder="Password" name='password' value={password} onChange={onChange}  className={`${password.trim().length <= 0 && 'has-error'}`} />
        {password.trim().length <= 0 && <span>Password is required</span>}
        {password.trim().length < 6 && password.trim().length > 0 && <span>Password lenght 6</span>}
        <input type="password" placeholder="Repeat password" name='password2' value={password2} onChange={onChange} className={`${password2.trim().length <= 0 && 'has-error'}`}  />
        <button type="submit" >Create</button>
        <button type="submit" onClick={resetForm} >Reset</button>
      </form>
    </div>
  )
}

export default RegisterPage
