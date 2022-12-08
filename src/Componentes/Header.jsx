import Buscador from "./Buscador";

function Header(props) {
    return(
        <header>
            <div className="row">
                <div className="col-8">
                    <h1>Buscador de Colaboradores</h1>                
                </div>
                <Buscador setTermino={props.setTermino}/>
            </div>
        </header>
    );
}

export default Header;