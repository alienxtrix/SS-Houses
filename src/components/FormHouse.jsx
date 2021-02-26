import React from "react";
import "../assets/styles/components/formHouse.scss";
function FormHouse() {
  return (
    <>
      <div className="wrapper">
        <div className="inner">
          <form action="">
            <h3>Vender Casa</h3>
            <div className="form-group">
              <div className="form-wrapper">
                <label for="">Título</label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-wrapper">
                <label for="">Área</label>
                <input type="text" className="form-control" />
              </div>
            </div>

            <div className="form-wrapper">
              <label for="">Dirección</label>

              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <div className="form-wrapper">
                <label for="">No. de baños</label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-wrapper">
                <label for="">No. de habitaciones</label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="form-wrapper">
              <label for="">Descripción</label>
              <input type="textarea" className="form-control" />
            </div>
            <div className="form-wrapper">
              <label for="">Ubicación maps</label>
              <input type="password" className="form-control" />
            </div>
            <div className="form-wrapper">
              <label for="">Foto de la propiedad</label>
              <input type="file" className="form-control" />
            </div>
            <div className="checkbox">
              <label>
                <input type="checkbox" /> Casa activa
                <span className="checkmark"></span>
              </label>
            </div>
            <button>Agregar</button>
            <button>Cancelar</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default FormHouse;
