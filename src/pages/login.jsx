import React from "react";
import "./login.css";
import guitarra from "../img/guitarra.svg";





const Login = () => {
  return (
    <section id="login" class="section-container">
        <header class="header-class">
            <h1>Bienvenido a cobe manager</h1>
            <h3>Por favor ingrese sus credenciales</h3>
        </header>
        <div>
            <form class="form-container">
            <img src={guitarra} alt="logo" class="img-class"/>
                <label>Usuario</label>
                <input type="text" name="user" />
                <label>Contraseña</label>
                <input type="password" name="contraseña" />
                <input class="button-submit" type="submit" value="ingresar" />
            </form>
        </div>
    </section>
  );
}  
export default Login;