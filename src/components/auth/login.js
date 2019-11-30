import React from "react";
import { Form, Field, withFormik } from "formik/dist/index";
import * as Yup from "yup";
import { connect } from "react-redux";
import { loginUser } from "../../redux/actions/userActions";
import { compose } from "redux";
import { withRouter } from "react-router-dom";

const LoginForm = props => {
  return (
    <>
      <Form className="login">
        <div className="username field">
          <label>username</label>
          <Field type="username" name="username" placeholder="username" />
          {props.touched.username && props.errors.username && (
            <p className="error">{props.errors.username}</p>
          )}
        </div>
        <div className="password field">
          <label>Password</label>
          <Field type="password" name="password" placeholder="password" />
          {props.touched.password && props.errors.password && (
            <p className="error">{props.errors.password}</p>
          )}
        </div>
        <button type="submit">Submit</button>
      </Form>
    </>
  );
};

const LoginComponent = compose(
  withRouter,
  withFormik({
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
      props.loginUser(values);
      props.history.push("/dashboard");
    }
  })
)(LoginForm);

export default connect(null, { loginUser })(LoginComponent);
