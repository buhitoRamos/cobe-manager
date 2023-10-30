import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom'


const NavBar = ({userName = 'default', onEventClick}) => {
  const history = useHistory()
  const dispatch = useDispatch();


  const _handleExit = () => {
    dispatch({ type: 'LOGIN', payload: {userName: '', password:''} });
    history.push(`/login`)
  }
  const _eventClick = (e) => {
    onEventClick(e.target.id);
  }

  return (
    <div className="m-1">
      <nav className="navbar navbar-dark bg-primary">
        <a className="navbar-brand">Bienvenido, {userName}</a>
        <button type="button" className="btn btn-primary" id="add-customer" onClick={_eventClick}>Cargar cliente</button>
        <button type="button" className="btn btn-outline-dark btn-lg"  onClick={_handleExit}>Salir</button>
      </nav>
    </div>
  );
}  
export default NavBar;