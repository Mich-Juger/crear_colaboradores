import { useState } from 'react';
import Header from './Componentes/Header.jsx';
import Formulario from './Componentes/Formulario.jsx';
import Listado from './Componentes/Listado.jsx';
import { BaseColaboradores } from './BaseColaboradores';


import './App.css';


function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [termino, setTermino] = useState('')

  return (
    <main>
      <Header setTermino={setTermino}/>
      <Listado colaboradores={colaboradores} termino={termino}/>
      <Formulario colaboradores={colaboradores} setColaboradores={setColaboradores}/>
      <hr/>
      

    
    </main>
  );
}

export default App;
