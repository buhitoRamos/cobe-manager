import React from "react";
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
import errorImg from "../../img/404Error.gif"
import "./errorPage.css";
const ErrorPage = () => {

   return ( 
      <section>
        <div className="container text-center">
        <h2 className="font-weight-bold mt-3 text-info">No podemos mostrar el contenido de esta página</h2>
        <img src={errorImg} alt="logo" className="mt-3"/>
        </div>
      </section>
   );
};

export default ErrorPage;