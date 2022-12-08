import { useState } from "react";

function Buscador(props) {
        const filtrarListado = (e) => {
        props.setTermino(e.target.value)
        
    }

    return(
        <article>
            <div className="col-4">
                <input onChange={filtrarListado} type="search" name="buscador" id="buscador" placeholder="Ingrese el nombre"/>            
            </div>
        </article>
    );
}

export default Buscador;