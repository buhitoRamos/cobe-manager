import React, { useState } from "react";
import { useSelector } from 'react-redux';
import  NavBar  from "../../components/navBar/NavBar";
import { useHistory } from 'react-router-dom'
import ErrorPage from "../../components/errorPage/ErrorPage";
import NewCustomer from "../../components/newCustomer/NewCustomer";
const MainPage = () => {
   const userData = useSelector((state) => state.userData) || {};
   const history = useHistory();
   const [operative, setOperative] = useState('');

   const _selectOperative = (operative) => {
    setOperative(operative);
      console.log(operative);
   };

   function renderContent(operative) {
    switch (operative) {
      case 'add-customer':
        return <NewCustomer/>;
      default:
        return '';
    }
  }

   return ( 
      <div className="">
        <NavBar 
        userName={userData.username}
        onEventClick={_selectOperative}/>
         {userData ? (
          <div className="m-1">
            {renderContent(operative)}
          </div>
         ) : (
            <ErrorPage/>
         )}
      </div>
   );
};

export default MainPage;

