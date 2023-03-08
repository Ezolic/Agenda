import { useState } from 'react'
import Botao from '../Botao'
import BotaoFechar from '../BotaoFecharModal'
import Input from '../Input'
import Lista from '../Lista'
import './Formulario.css'

let id = 0


const Formulario = (props) => {

    const Info = (a) => {
        props.FecharModal(a)
    }

    const [dia, setDia] = useState('')
    const [mes, setMes] = useState('')
    const [tarefa, setTarefa] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        id++

        props.aoTarefaCriada({ dia, mes, tarefa, id })

        setDia('')
        setMes('')
        setTarefa('')
    }



    return (
        (props.Aberto) ?
            <div className='modal'>
                <BotaoFechar FecharModal={Info} />
                <form onSubmit={aoSalvar}>
                    <h2>Preencha os campos para criar uma nova tarefa</h2>
                    <Input
                        placeholder='Insira o dia da tarefa'
                        label='Dia'
                        obrigatorio={true}
                        tipo='text'
                        limite='2'
                        valor={dia}
                        aoAlterado={valor => setDia(valor)} />
                    
                    <Lista 
                        label='Mês'
                        placeholder='Insira o mês da tarefa'
                        obrigatorio={true}
                        valor={mes}
                        aoAlterado={valor => setMes(valor)}
                        meses={props.meses}/>

                    <Input
                        placeholder='Insira a tarefa'
                        label='Tarefa'
                        obrigatorio={true}
                        tipo='text' 
                        valor={tarefa}
                        aoAlterado={valor => setTarefa(valor)} />

                    <Botao> Criar Tarefa </Botao>

                </form>
            </div>
            : null
    )


}

export default Formulario