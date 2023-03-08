import './Lista.css'

const Lista = (props) => {
    return (
        <div className='lista'>

            <label>{props.label}</label>

            <select 
            onChange={evento => props.aoAlterado(evento.target.value)} 
            required={props.obrigatorio} 
            value={props.valor}
            >  
                <option value=''>{props.placeholder}</option>
                {props.meses.map(mes => <option key={mes}>{mes}</option>)}
                
            </select>
        </div>

    )
}
export default Lista                                                                                                                       