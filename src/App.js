import './App.css';
import { useState } from 'react';
import HelloWorld from './Components/HelloWorld';
import SayMyName from './Components/SayMyName';
import Pessoa from './Components/Pessoa';
import Frase from './Components/Frase';
import List from './Components/List';
import Evento from './Components/Evento';
import Form from './Components/Form';
import Condicional from './Components/Condicional';
import OutraLista from './Components/OutraLista';

function App() {
  const name = 'Fabrício'
  const newName = name.toUpperCase()
  const[nome, setNome] = useState()
  function sum(a, b){
    return a + b    
  }

const meusItens = ['React', 'Vue', 'Angular']

  const url ='https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zm9jdXN8ZW58MHx8MHx8&w=1000&q=80/'
  return (
    <div className="App">
      <h1>Testando CSS</h1>
      <h2>Alterando o JSX</h2>
      <p>Olá {newName}!</p>
      <p>Soma: {sum(2, 2)}</p>
      <img src={url} alt= 'Imagem' />   
      <HelloWorld />
      <SayMyName nome='Fabrício' />
      <Pessoa       
      foto = "https://freerangestock.com/thumbnail/137610/lonely-man-under-night-sky--starry-sky-over-the-horizon--conte.jpg" />
      <Frase />
      <List />
      <Evento />
      <Form />
      <h1>Renderização Condicional</h1>
      <Condicional />
      <h1>Renderização de Listas</h1>
      <OutraLista itens={meusItens}/>
      <OutraLista itens={[]}/>
      <h1>State Lift</h1>
      <SeuNome setNome={setNome} />
      {nome}
    </div>
  );
}

export default App;
