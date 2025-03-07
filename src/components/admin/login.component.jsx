import React from "react";
import { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import './login.css';

const LoginComponent = () => {

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .min(5, 'Email address must be at least 5 characters')
      .max(100, 'Email addres must not exceed 100 characters')
      .required('Please enter your Email address'),
    password: Yup.string()
      .min(1, 'Password must be at least 1 characters')
      .max(40, 'Password must not exceed 40 characters')
      .required('Please enter your password'),
  });

  return (
    <>

              <div className="card text-black shadow-lg form-card-login">
                <div className="card-body p-md-5">
                  <p className="text-center h2 fw-bold mb-2 pb-4 form-name">Login</p>
                  <Formik
                    initialValues={{ email: "", password: "" }}
                    validationSchema={validationSchema}
                    onSubmit={(values) => {
                      console.log("Form submitted with values:", values);
                    }}
                  >
                    {({ touched, errors }) => (
                      <Form>
                        {/* Username Field */}
                        <div className="mb-4">
                          <div className="form-floating">
                            <Field
                              type="text"
                              id="email-id"
                              name="email"
                              className={`form-control ${touched.email && errors.email ? "is-invalid" : ""}`}
                              placeholder="Email address"
                            />
                            <label htmlFor="email">
                              <i className="fa fa-user icon-input"></i>Email address<span className="required-input">*</span>
                            </label>
                            <ErrorMessage name="email" component="div" className="invalid-feedback" />
                          </div>
                        </div>

                        {/* Password Field */}
                        <div className="mb-4">
                        <div className="form-floating position-relative">
                        <Field
                         type={showPassword ? 'text' : 'password'}
                         id="password"
                         name="password"
                         className={`form-control ${touched.password && errors.password ? 'is-invalid' : ''}`}
                          placeholder="Password"
                       />
                      <label htmlFor="password">
                              <i className="fa fa-lock icon-input"></i>Password
                              <span className="required-input">*</span>
                     </label>
                     <span className="password-toggle-icon" onClick={togglePasswordVisibility}>
                         <i className={`fa ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                    </span>
                     <ErrorMessage name="password" component="div" className="invalid-feedback" />
                    </div>
                  <div className="text-end mt-3">
                    <a href="/forgot-password" className="forgot-password-link">Forgot Password?</a>
                  </div>
                 </div>

                        

                        {/* Submit Button */}
                        <div className="d-flex justify-content-center mt-5">
                          <button type="submit" className="btn btn-lg w-100 login-button">
                            Login
                          </button>
                        </div>

                        {/* Additional Links */}
                  
                        <p className="text-center mb-4 mt-4">
                          <span>Don't have an account?  </span>
                          <a href="/register" className="register-link">Register now.</a>
                        </p>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
   
    </>
  );
};

export default LoginComponent;