import React from "react";


const NewCustomer = () => {
  return (
    <form>
       <div className="d-flex justify-content-between align-items-center mt-3">
         <div className="col">
           <input type="text" className="form-control" placeholder="Nombre" />
         </div>
         <div className="col">
           <input type="text" className="form-control" placeholder="Apellido" />
         </div>
         <div className="col">
           <input type="number" className="form-control" placeholder="Telefono" />
         </div>
         <button className="btn btn-outline-primary ml-auto">Guardar</button>
       </div>
     </form>
  );
};
export default NewCustomer;