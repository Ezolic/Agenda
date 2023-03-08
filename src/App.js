import './App.css'
import { useState } from 'react';
import BotaoAbrirModal from './componentes/BotaoAbrirModal';
import Formulario from './componentes/Formulario';
import Meses from './componentes/Meses';

function App() {

  const [tarefas, setTarefas] = useState([])

  const aNovaTarefaCriada = (tarefa) => {
    setTarefas([...tarefas, tarefa])
  }


  const [openModal, setOpenModal] = useState(false)

  const Info = (a) => {
    setOpenModal(a)
  }


  const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

  return (
    <div className="App">
      <div className='container'>
        <BotaoAbrirModal AbrirModal={Info} texto='+ Nova Tarefa' />
      </div>
      <div className='box'>
        {meses.map(mes =>

          <Meses
            key={mes}
            nome={mes}
            tarefas={tarefas.filter(tarefa => tarefa.mes === mes)} />
        )}


      </div>
      <Formulario meses={meses} FecharModal={Info} Aberto={openModal} aoTarefaCriada={tarefa => aNovaTarefaCriada(tarefa)} />
    </div>
  );
}

export default App;
