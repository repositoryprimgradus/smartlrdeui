import React from "react";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import './login.css';


import HeaderComponent from "components/header/header";
import NavbarComponent from "components/header/top.navbar";
import LoginComponent from "components/home/login.component";
import FooterComponent from "components/footer/footer";


const LoginFormComponent = () => {
  return (
    <>
       <HeaderComponent/> 
       <NavbarComponent/>
      <section  id="fixed-sub-nav" className="vh-100 gradient-background">
       <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
          <div className="col-lg-6 col-md-8 col-12  mt-2 pt-1">
               <LoginComponent/>
             </div>
          </div>



        </div>

      </section>


          <FooterComponent/>

      
 

      


    </>
  );
};

export default LoginFormComponent;