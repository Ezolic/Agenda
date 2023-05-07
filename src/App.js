import './App.css'
import { useState } from 'react';
import BotaoAbrirModal from './componentes/BotaoAbrirModal';
import Formulario from './componentes/Formulario';
import Meses from './componentes/Meses';
import { v4 as uuidv4 } from 'uuid';


function App() {

  const [tarefas, setTarefas] = useState([])

  const aNovaTarefaCriada = (tarefa) => {
    setTarefas([...tarefas, tarefa])
    setOpenModal(false)
  }

  const [openModal, setOpenModal] = useState(false)

  const Info = (a) => {
    setOpenModal(a)
  }


  const [meses, setMeses] = useState([
    {
      id: uuidv4(),
      mes: 'Janeiro',
      diaLimite: 31
    },
    {
      id: uuidv4(),
      mes: 'Fevereiro',
      diaLimite: 28
    },
    {
      id: uuidv4(),
      mes: 'Março',
      diaLimite: 31
    },
    {
      id: uuidv4(),
      mes: 'Abril',
      diaLimite: 30
    },
    {
      id: uuidv4(),
      mes: 'Maio',
      diaLimite: 31
    },
    {
      id: uuidv4(),
      mes: 'Junho',
      diaLimite: 30
    },
    {
      id: uuidv4(),
      mes: 'Julho',
      diaLimite: 31
    },
    {
      id: uuidv4(),
      mes: 'Agosto',
      diaLimite: 31
    },
    {
      id: uuidv4(),
      mes: 'Setembro',
      diaLimite: 30
    },
    {
      id: uuidv4(),
      mes: 'Outubro',
      diaLimite: 31
    },
    {
      id: uuidv4(),
      mes: 'Novembro',
      diaLimite: 30
    },
    {
      id: uuidv4(),
      mes: 'Dezembro',
      diaLimite: 31
    },
  ]);


  return (
    <div className="App">
      <div className='container'>
        <BotaoAbrirModal AbrirModal={Info} texto='+ Nova Tarefa' />
      </div>
      <div className='box'>
        {meses.map(mes =>
          <Meses
            key={mes.id}
            nome={mes.mes}
            tarefas={tarefas.filter(tarefa => tarefa.mes === mes.mes)} />
        )}


      </div>
      <Formulario 
        meses={meses}
        FecharModal={Info} 
        Aberto={openModal} 
        aoTarefaCriada={tarefa => aNovaTarefaCriada(tarefa)} 

      />
    </div>
  );
}

export default App;
