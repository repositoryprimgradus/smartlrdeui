import React from "react";
import { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import './register.css';
// import SelectPicker from "components/selectpicker/selectPicker";





const RegisterComponent = () => {

const designations = ["Director", "Sc G", "Sc F", "Sc E", "Sc D", "Sc C", "Sc B", "TO D","TO C","TO B","TO A"];
const organizations = ["LRDE", "ADE", "CAIR", "DEBEL"];
  
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .matches(/^[a-zA-Z\s]+$/, "Name should contain only letters")
      .min(2, "Name must be at least 2 characters long")
      .max(100, "Name cannot exceed 100 characters")
      .required("Please enter your name"),
    
    mobileno: Yup.string()
      .matches(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile number")
      .required("Please enter your mobile number"),
    
    emailId: Yup.string()
      .email("Enter a valid email address")
      .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, "Invalid email format")
      .required("Please enter your email"),
  

  });
  

    return (
        <>

              <div className="card text-black shadow-lg form-card-register">
                <div className="card-body p-md-5">
                <p className="text-center h2 fw-bold mb-2 pb-4 form-name">Registration</p>
           

                  <Formik
                    initialValues={{ name: "", mobileno: "", emailId: "" }}

                    validationSchema={validationSchema}
                    onSubmit={(values) => {
                      console.log("Form submitted with values:", values);
                    }}
                  >
                  {({ values, touched, errors, setFieldValue }) => (
                      <Form>
                        {/* Name Field */}
                        <div className="mb-3">
                          <div className="form-floating">
                            <Field
                              type="text"
                              id="name"
                              name="name"
                              className={`form-control ${touched.name && errors.name ? "is-invalid" : ""}`}
                              placeholder="Name"
                              maxLength={100} 
                              onInput={(e) => {
                                // Allow letters, spaces, hyphens, apostrophes, and periods
                                e.target.value = e.target.value.replace(/[^A-Za-z\s\.\'\-]/g, "");
                              }}
                            />
                            <label htmlFor="name">
                              <i className="fa fa-user  icon-input"></i>Name<span className="required-input">*</span>
                            </label>
                            <ErrorMessage name="name" component="div" className="invalid-feedback" />
                          </div>
                        </div>

                        {/* Mobile No Field */}
                        <div className="mb-3">
                          <div className="form-floating">
                            <Field
                              type="text"
                              id="mobileno"
                              name="mobileno"
                              className={`form-control ${touched.mobileno && errors.mobileno ? "is-invalid" : ""}`}
                              placeholder="Mobile No"
                              maxLength={10} 
                              onInput={(e) => (e.target.value = e.target.value.replace(/\D/g, ""))} // Removes non-numeric characters
                            />
                            <label htmlFor="mobileno">
                              <i className="fa fa-phone  icon-input"></i>Mobile No<span className="required-input">*</span>
                            </label>
                            <ErrorMessage name="mobileno" component="div" className="invalid-feedback" />
                          </div>
                        </div>

                        {/* Email Field */}
                        <div className="mb-3">
                          <div className="form-floating">
                            <Field
                              type="email"
                              id="emailId"
                              name="emailId"
                              className={`form-control ${touched.emailId && errors.emailId ? "is-invalid" : ""}`}
                              placeholder="Email Address"
                              maxLength={100} 
                            />
                            <label htmlFor="emailId">
                              <i className="fa fa-envelope  icon-input"></i>Email Address <span className="required-input">*</span>
                            </label>
                            <ErrorMessage name="emailId" component="div" className="invalid-feedback" />
                          </div>
                        </div>


                          {/* Submit Button */}
                          <div className="d-flex justify-content-center mt-4 pt-3">
                          <button type="submit" className="btn btn-lg w-100 register-button">
                            Register
                          </button>
                        </div>


                        <p className="text-center mb-4 mt-4">
                    Already Registered?{" "}
                    <a href="/login" className="login-link">Please Login</a>
                  </p>

                      </Form>
                    )}
                  </Formik>


              <div className="alert-container">
                <div className="alert-content">
                  <strong>Notice:</strong> After registering, please check your email for your password.
                </div>
              </div>

                </div>
              </div>
    

           

       



       </>
  )
}
export default RegisterComponent;

