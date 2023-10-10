import React, { useMemo } from "react";
import "./login.css";
import guitarra from "../img/guitarra.svg";
import useUser from "../hooks/useUser";



const Login = ({data, actions}) => {
  const {user} = data;
  const {onSetUser} = actions;

  const _handleClick = () => {
    debugger
    useUser(user, onSetUser);
  }

  return (
     <section id="login" className="section-container">
        <header className="header-class">
          <h1>Bienvenido a cobe manager</h1>
          <h3>Por favor ingrese sus credenciales</h3>
        </header>
        <div>
          <form className="form-container">
            <img src={guitarra} alt="logo" className="img-class"/>
            <div className="mb-3">
              <label htmlFor="userName" className="form-label">Usuario</label>
              <input  id="userName" type="text" name="user" className="form-control"/>
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Contraseña</label>
              <input type="password" name="contraseña" id="password" className="form-control"/>
            </div>
            <button type="button" className="btn btn-outline-dark"
            onClick={_handleClick}>Ingresar</button>
           </form>
        </div>
      </section>
  );
}  
export default Login;