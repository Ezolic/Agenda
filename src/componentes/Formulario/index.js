import { useState } from 'react'
import Botao from '../Botao'
import BotaoFechar from '../BotaoFecharModal'
import Input from '../Input'
import Lista from '../Lista'
import './Formulario.css'
import Dias from '../Dias'

let id = 0


const Formulario = (props) => {


    const [mesEscolhido, setMesEscolhido] = useState('')

    const AtualizarMes = a => {
        setMesEscolhido(a)

    }
    const Info = (a) => {
        props.FecharModal(a)
    }

    const [dia, setDia] = useState('')
    const [mes, setMes] = useState('')
    const [tarefa, setTarefa] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()

        props.aoTarefaCriada({ dia, mes, tarefa, id })
        
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
                    
                    <Lista 
                        label='Mês'
                        placeholder='Insira o mês da tarefa'
                        ReceberMes = {AtualizarMes}
                        obrigatorio={true}
                        valor={mes}
                        aoAlterado={valor => setMes(valor)}
                        meses={props.meses}
                    />


                    <Dias
                        meses = {props.meses}
                        mesEscolhido = {mesEscolhido}
                        obrigatorio
                        valor={dia}
                        aoAlterado={valor => setDia(valor)}
                        
                    />


                    <Input
                        placeholder='Insira a tarefa'
                        label='Tarefa'
                        obrigatorio={true}
                        tipo='text' 
                        valor={tarefa}
                        aoAlterado={valor => setTarefa(valor)} 
                    />

                    <Botao> Criar Tarefa </Botao>

                </form>
            </div>
            : null
    )

}

export default Formulario