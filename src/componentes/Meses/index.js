import Tarefas from '../Tarefas'
import './Meses.css'

const Meses = (props) => {
    return (

    (props.tarefas.length > 0) ?
        <div className='mes'>
            <h3> {props.nome}</h3>
            <div className='tarefas'>
                {props.tarefas.map(tarefa =>
                    <Tarefas
                        key={tarefa.id}
                        tarefa={tarefa.tarefa}
                        dia={tarefa.dia}

                    />)
                }
            </div>
        </div>
        : ''
    )
}

export default Meses