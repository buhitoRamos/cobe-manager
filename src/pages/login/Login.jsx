import React, { useState }  from "react";
import guitarra from "../../img/guitarra.svg";
import { loginUser } from "../../utils/loginUser";
import { useDispatch } from "react-redux";
import { customAlert } from "../../components/CustomAlert";
import { useHistory } from 'react-router-dom'
import "./login.css";


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState(""); 
const dispatch = useDispatch();
const history = useHistory()

  const _handleClick = () => {
    loginUser(username, password)
      .then((response) => {
        dispatch({ type: 'LOGIN', payload: response });
        history.push(`/main`)
       
      })
      .catch((error) => {
        customAlert({ text: error.message })
      });
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
              <input  
              id="userName" 
              type="text"
               name="user" 
               className="form-control"
               onChange={(e) => setUsername(e.target.value)}
               />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Contraseña</label>
              <input 
              type="password" 
              name="contraseña" 
              id="password" 
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="button" className="btn btn-outline-dark"
            onClick={_handleClick}>Ingresar</button>
           </form>
        </div>
      </section>
  );
}  
export default Login;