import React from "react";
import "../../static/alert.scss";

export const Alert = (props) => {
  return (
    <div>
      <section className="cont-modal-main">
        <div className="tajeta">
          <div className="container-elements-tarjeta">
            <div className="flex-elemts">
              <div className="mt-4">
                <h3 className="title-vale1">¿Está seguro de cerrar esta sesión?</h3>
                <button className="btn-vale-dashboard2" onClick={props.toggleModalAlert}>
                  Ok
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
