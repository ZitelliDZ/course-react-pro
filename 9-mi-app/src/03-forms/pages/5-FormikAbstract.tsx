import React from "react";
import { useFormik, Form, Formik } from "formik";
import "../styles/styles.css";
import * as Yup from "yup";
/*import MyTextInput from "../components/MyTextInput";
import MySelect from "../components/MySelect";
import MyCheck from "../components/MyCheck";*/

import { MyCheck, MySelect, MyTextInput } from "../components"

export const FormikAbstract = () => {
  return (
    <div>
      <h3>FormikBasicPage</h3>

      <Formik
        initialValues={{
          firstName: "sdf",
          lastName: "",
          email: "",
          password: "",
          password2: "",
          terms: false,
          jobType: "",
        }}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          alert(JSON.stringify(values, null, 2));
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(10, "Debe de tener 10 caracteres como maximo")
            .required("Required"),
          lastName: Yup.string()
            .max(10, "Debe de tener 10 caracteres como maximo")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          password: Yup.string().required("Required"),
          password2: Yup.string()
            .oneOf([Yup.ref("password")], "Passwords must match")
            .required("Required"),
          terms: Yup.boolean().oneOf([true], "Debe aceptar los terminos"),
          jobType: Yup.string()
            .notOneOf(["product"],'You cannot choose this option')
            .required("Required"),
        })}
      >
        {(formik) => {
          return (
            <Form>


              <MyTextInput label="First name" name="firstName" placeholder="Diego" />
              <MyTextInput label="Last name" name="lastName" />
              <MyTextInput label="Email" name="email" type="email" />
              <MyTextInput label="Password" name="password" type="password" />
              <MyTextInput label="Repeat password" name="password2" type="password" />
              <MySelect label="Job Type" name="jobType">
                <option value="">Select a job type</option>
                <option value="designer">Designer</option>
                <option value="development">Developer</option>
                <option value="product">Product Manager</option>
                <option value="other">Other</option>
              </MySelect>
              <MyCheck name="terms" label="Accept terms and conditions" />

              <button type="submit">Create</button>
              <button type="submit">Reset</button>
            </Form>
          );
        }}


          {
            // <label htmlFor="firstName">First Name</label>
            // <input type="text" placeholder="firstName" { ...getFieldProps('firstName') } />
            // {touched.firstName && errors.firstName && <span>{errors.firstName}</span>}
            //
            // <label htmlFor="lastName">Last Name</label>
            // <input type="text" placeholder="lastName"  { ...getFieldProps('lastName') } />
            // {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}
            //
            // <label htmlFor="email">Email</label>
            // <input type="email" placeholder="Email"  { ...getFieldProps('email') } />
            // {touched.email && errors.email && <span>{errors.email}</span>}
            //
            // <label htmlFor="password">Password</label>
            // <input type="password" placeholder="Password"  { ...getFieldProps('password') } />
            // {touched.password && errors.password && <span>{errors.password}</span>}
            //
            // <label htmlFor="password2">Repeat password</label>
            // <input type="password" placeholder="Repeat password"  { ...getFieldProps('password2') } />
            // {touched.password2 && errors.password2 && <span>{errors.password2}</span>}
          }

          
      </Formik>
    </div>
  );
};

export default FormikAbstract;
