function Listado(props) {
    return(
        <section className="listado">
                <h4>Listado de Colaboradores</h4>

        {props.colaboradores.length == 0 ? 
            <p> No existen colaboradores</p> : 
            props.termino.length == 0 ?
            props.colaboradores.map( (colaborador) =>  (
                
                <div key={colaborador.id}>{colaborador.nombre} - {colaborador.email}</div>            
            )) :
            props.colaboradores.filter(colaborador => colaborador.nombre.includes(props.termino)).map( (colaborador) =>  (
                <div key={colaborador.id}>{colaborador.nombre} - {colaborador.email}</div>            
            ))
        }    

        </section>
    );
}

export default Listado;


