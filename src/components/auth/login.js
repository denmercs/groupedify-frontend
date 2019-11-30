import React from "react";
import { Form, Field, withFormik } from "formik/dist/index";
import * as Yup from "yup";
import { connect } from "react-redux";
import { loginUser } from "../../redux/actions/userActions";

const LoginForm = (touched, errors) => {
  return (
    <>
      <Form className="login">
        <h3>Please Login</h3>
        <div className="username field">
          <label>username</label>
          <Field type="username" name="username" placeholder="username" />
          {touched.username && errors.username && (
            <p className="error">{errors.username}</p>
          )}
        </div>
        <div className="password field">
          <label>Password</label>
          <Field type="password" name="password" placeholder="password" />
          {touched.password && errors.password && (
            <p className="error">{errors.password}</p>
          )}
        </div>
        <button type="submit">Submit</button>
      </Form>
    </>
  );
};

const LoginComponent = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string()
      .min(5, "Username must be 5 characters or longer")
      .required("Username is required"),
    password: Yup.string()
      .min(5, "Password must be 5 characters or longer")
      .required("Password is required")
  }),

  handleSubmit(values, { props }) {
    props.loginUser(values, props.history);
  }
})(LoginForm);

export default connect(null, { loginUser })(LoginComponent);
