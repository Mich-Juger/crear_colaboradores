import { useState } from "react";


function Formulario(props) {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");

    // Función al enviar el formulario
    const guardarColaborador = (e) => {
        e.preventDefault();
        props.setColaboradores([...props.colaboradores, {id: props.colaboradores.length +1, nombre: nombre, email: email}])

    };


   return(
        <section className="formulario">
            <form onSubmit={guardarColaborador}>
             
                    <div className="mb-3">
                        <h4>Crear Colaborador</h4>
                        <label htmlFor="nombre" className="form-label"> Nombre del colaborador</label>
                        <input type="texto" className="form-control" id="nombre" name="nombre" 
                            placeholder="Ingresa nombre del colaborador" 
                            onChange={(e) =>  setNombre(e.target.value)}/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label"> Correo del colaborador</label>
                        <input type="email" className="form-control" id="email" name="email" 
                        placeholder="Ingresa email del colaborador" 
                        onChange={(e) =>  setEmail(e.target.value)}/>
                    </div>

                    <div className="mb-3">
                        <button type="submit" className="btn btn-primary" onClick={guardarColaborador}> Agregar colaborador</button>
                    </div>         
            </form>

        </section>          

    );
}


export default Formulario;

