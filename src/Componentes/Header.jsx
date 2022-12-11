import Buscador from "./Buscador";

function Header(props) {
    return(
        <header className="buscador-colaboradores">          
                <h3>Colaboradores Activos</h3>
                           
                <Buscador setTermino={props.setTermino}/>            
        </header>
    );
}

export default Header;