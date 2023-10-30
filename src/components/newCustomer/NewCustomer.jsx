import React from "react";


const NewCustomer = () => {
  return (
    <form>
  <div class="d-flex justify-content-between align-items-center mt-3">
    <div class="col">
      <input type="text" class="form-control" placeholder="Nombre" />
    </div>
    <div class="col">
      <input type="text" class="form-control" placeholder="Apellido" />
    </div>
    <div class="col">
      <input type="number" class="form-control" placeholder="Telefono" />
    </div>
    <button class="btn btn-outline-primary ml-auto">Guardar</button>
  </div>
</form>
  );
};
export default NewCustomer;