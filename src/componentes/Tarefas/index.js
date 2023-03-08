import './Tarefas.css'

function Tarefas(props) {

    return (
        <div className='tarefa'>
            <h2>Dia: {props.dia}</h2>
            <p>{props.tarefa}</p>
        </div>
    )
}

export default Tarefas