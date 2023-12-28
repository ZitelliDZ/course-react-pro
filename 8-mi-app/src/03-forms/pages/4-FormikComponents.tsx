import React from "react";
import { useFormik, Form, ErrorMessage, Field, Formik } from "formik";
import "../styles/styles.css";
import * as Yup from "yup";

export const FormikComponents = () => {
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
              <label htmlFor="firstName">First Name</label>
              <Field type="text" placeholder="firstName" name="firstName" />
              <ErrorMessage name="firstName" component="span" />

              <label htmlFor="lastName">Last Name</label>
              <Field type="text" placeholder="lastName" name="lastName" />
              <ErrorMessage name="lastName" component="span" />

              <label htmlFor="email">Email</label>
              <Field type="email" placeholder="Email" name="email" />
              <ErrorMessage name="email" component="span" />

              <label htmlFor="password">Password</label>
              <Field type="password" placeholder="Password" name="password" />
              <ErrorMessage name="password" component="span" />

              <label htmlFor="password2">Repeat password</label>
              <Field
                type="password"
                placeholder="Repeat password"
                name="password2"
              />
              <ErrorMessage name="password2" component="span" />
              
              <label>
                <Field type="checkbox" name="terms" />Terms
              </label>
              <ErrorMessage name="terms" component="span" />

              <label htmlFor="jobType">Job Type</label>
              <Field as="select" name="jobType">
                <option value="">Select a job type</option>
                <option value="designer">Designer</option>
                <option value="development">Developer</option>
                <option value="product">Product Manager</option>
                <option value="other">Other</option>
              </Field>
              <ErrorMessage name="jobType" component="span" />

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

export default FormikComponents;
