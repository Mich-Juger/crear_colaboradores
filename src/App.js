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
    <main className='container'>
      <Header setTermino={setTermino}/>
      <Formulario colaboradores={colaboradores} setColaboradores={setColaboradores}/>
      <hr/>
      <Listado colaboradores={colaboradores} termino={termino}/>

    
    </main>
  );
}

export default App;
