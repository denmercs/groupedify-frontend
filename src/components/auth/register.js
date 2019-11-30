import React from "react";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { registerUser } from "../../redux/actions/userActions";
import { withRouter } from "react-router-dom";
import { compose } from "redux";

const Register = ({ errors, touched }) => {
  return (
    <>
      <Form className="register">
        <div>
          <label>Username</label>
          <Field type="username field" name="username" placeholder="username" />
          {touched.username && errors.username && (
            <p className="error">{errors.username}</p>
          )}
          <label>Password</label>
          <Field type="password field" name="password" placeholder="password" />
          {touched.password && errors.password && (
            <p className="error">{errors.password}</p>
          )}
          <label>First Name</label>
          <Field
            type="firstName field"
            name="firstName"
            placeholder="firstName"
          />
          {touched.firstName && errors.firstName && (
            <p className="error">{errors.firstName}</p>
          )}
          <label>Last Name</label>
          <Field type="lastName field" name="lastName" placeholder="lastName" />
          {touched.lastName && errors.lastName && (
            <p className="error">{errors.lastName}</p>
          )}
        </div>
        <button type="submit">Submit</button>
      </Form>
    </>
  );
};

const registerComponent = compose(
  withRouter,
  withFormik({
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
  })
)(Register);

export default connect(null, { registerUser })(registerComponent);
