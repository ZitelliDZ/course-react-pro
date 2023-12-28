import React from "react";
import { useFormik } from "formik";
import "../styles/styles.css";
import * as Yup from 'yup';


/*interface InitialValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  password2: string;
}*/


export const FormikYupPage = () => {

  

  //const {values, handleChange, handleSubmit, errors, touched, handleBlur} = useFormik({
  const {values, handleChange, handleSubmit, errors, touched, handleBlur, getFieldProps} = useFormik({
    initialValues: {
      firstName: "asd",
      lastName: "",
      email: "",
      password: "",
      password2: "",
    },
    onSubmit: (values) => {
      console.log(values);
      alert(JSON.stringify(values, null, 2));
    },
    validationSchema: Yup.object({
      firstName: Yup.string().max(10,'Debe de tener 10 caracteres como maximo').required("Required"),
      lastName: Yup.string().max(10,'Debe de tener 10 caracteres como maximo').required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().required("Required"),
      password2: Yup.string().oneOf([Yup.ref('password')], 'Passwords must match').required("Required"),
    }),
  });


  return (
    <div>
      <h3>FormikBasicPage</h3>

      <form action="" noValidate onSubmit={ (ev)=>handleSubmit(ev) }  >
        <label htmlFor="firstName">First Name</label>
        <input type="text" placeholder="firstName" { ...getFieldProps('firstName') } />
        {touched.firstName && errors.firstName && <span>{errors.firstName}</span>}

        <label htmlFor="lastName">Last Name</label>
        <input type="text" placeholder="lastName"  { ...getFieldProps('lastName') } />
        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

        <label htmlFor="email">Email</label>
        <input type="email" placeholder="Email"  { ...getFieldProps('email') } />
        {touched.email && errors.email && <span>{errors.email}</span>}

        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password"  { ...getFieldProps('password') } />
        {touched.password && errors.password && <span>{errors.password}</span>}

        <label htmlFor="password2">Repeat password</label>
        <input type="password" placeholder="Repeat password" name="password2" onChange={ handleChange } value={values.password2} onBlur={handleBlur} />
        {touched.password2 && errors.password2 && <span>{errors.password2}</span>}

        <button type="submit">Create</button>
        <button type="submit">Reset</button>
      </form>
    </div>
  );
};

export default FormikYupPage;
