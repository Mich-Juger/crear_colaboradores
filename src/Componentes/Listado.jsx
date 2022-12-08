function Listado(props) {
    return(
        <section>
        <h4>Listado de Colaboradores</h4>

        {props.colaboradores.length == 0 ? 
            <p> No existen colaboradores</p> : 
            props.termino.length == 0 ?
            props.colaboradores.map( (colaborador) =>  (
                <p key={colaborador.id}>{colaborador.nombre} - {colaborador.email}</p>            
            )) :
            props.colaboradores.filter(colaborador => colaborador.nombre.includes(props.termino)).map( (colaborador) =>  (
                <p key={colaborador.id}>{colaborador.nombre} - {colaborador.email}</p>            
            ))
        }    

        </section>
    );
}

export default Listado;