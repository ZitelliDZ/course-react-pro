import React from "react";
import { useFormik } from "formik";
import "../styles/styles.css";

interface InitialValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  password2: string;
}


export const FormikBasicPage = () => {

  const validateForm = (values:InitialValues) => {
    const errors: any = {};
    if (!values.firstName) {
      errors.firstName = "Required";
    }
    if (!values.lastName) {
      errors.lastName = "Required";
    }
    if (!values.email) {
      errors.email = "Required";
    } else if (!isValidEmail(values.email)) {
      errors.email = "Invalid email address";
    }
    if (!values.password) {
      errors.password = "Required";
    }
    if (!values.password2) {
      errors.password2 = "Required";
    }
    if (values.password2 !== values.password) {
      errors.password2 = "Passwords must match";
    }
    return errors;
  }

  const {values, handleChange, handleSubmit, errors, touched, handleBlur} = useFormik({
    initialValues: {
      firstName: "asd",
      lastName: "",
      email: "",
      password: "",
      password2: "",
    },
    validate : validateForm,
    onSubmit: (values) => {
      console.log(values);
      alert(JSON.stringify(values, null, 2));
    }
  });

  const isValidEmail = (email: string) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  return (
    <div>
      <h3>FormikBasicPage</h3>

      <form action="" noValidate onSubmit={ (ev)=>handleSubmit(ev) }  >
        <label htmlFor="firstName">First Name</label>
        <input type="text" placeholder="firstName" name="firstName" onChange={ handleChange } value={values.firstName} onBlur={handleBlur} />
        {touched.firstName && errors.firstName && <span>{errors.firstName}</span>}

        <label htmlFor="lastName">Last Name</label>
        <input type="text" placeholder="lastName" name="lastName" onChange={ handleChange } value={values.lastName} onBlur={handleBlur} />
        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

        <label htmlFor="email">Email</label>
        <input type="email" placeholder="Email" name="email" onChange={ handleChange } value={values.email} onBlur={handleBlur} />
        {touched.email && errors.email && <span>{errors.email}</span>}

        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" name="password" onChange={ handleChange } value={values.password} onBlur={handleBlur} />
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

export default FormikBasicPage;
