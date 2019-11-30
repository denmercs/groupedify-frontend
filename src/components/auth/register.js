import React from "react";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { registerUser } from "../../redux/actions/userActions";

const Register = ({ values, errors, touched }) => {
  return (
    <>
      <h3> Register</h3>
      <Form className="register">
        <div>
          <p>Username</p>
          <Field type="username" name="username" placeholder="username" />
          {touched.username && errors.username && (
            <p className="error">{errors.username}</p>
          )}
          <p>Password</p>
          <Field type="password" name="password" placeholder="password" />
          {touched.password && errors.password && (
            <p className="error">{errors.password}</p>
          )}
          <p>First Name</p>
          <Field type="firstName" name="firstName" placeholder="firstName" />
          {touched.firstName && errors.firstName && (
            <p className="error">{errors.firstName}</p>
          )}
          <p>Last Name</p>
          <Field type="lastName" name="lastName" placeholder="lastName" />
          {touched.lastName && errors.lastName && (
            <p className="error">{errors.lastName}</p>
          )}
        </div>
        <button type="submit">Submit</button>
      </Form>
    </>
  );
};

const registerComponent = withFormik({
  mapPropsToValues({ username, password, firstName, lastName }) {
    return {
      username: username || "",
      password: password || "",
      firstName: firstName || "",
      lastName: lastName || ""
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string()
      .min(5, "Username must be 5 characters or longer")
      .required("Username is required"),
    password: Yup.string()
      .min(5, "Password must be 5 characters or longer")
      .required("Password is required"),
    firstName: Yup.string(),
    lastName: Yup.string()
  }),

  handleSubmit(values, { props }) {
    props.registerUser(values, props.history);
  }
})(Register);

export default connect(null, { registerUser })(registerComponent);
