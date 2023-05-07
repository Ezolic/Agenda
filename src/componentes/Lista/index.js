import { useState } from 'react';
import './Lista.css'

const Lista = (props) => {

    const [mesEscolhido, setMesEscolhido] = useState()
    props.ReceberMes(mesEscolhido)

    

    return (
        <div className='lista'>

            <label>{props.label}</label>

            <select

                onChange={evento => 
                    {               
                        props.aoAlterado(evento.target.value); 
                        setMesEscolhido(evento.target.value)

                    }
            
                }
                required={props.obrigatorio}
                value={props.valor}
            >
                <option value=''>{props.placeholder}</option>

                {props.meses.map(mes => <option key={mes.id}>{mes.mes}</option>)}



            </select>
        </div>

    )
}
export default Lista                                                                                                                       