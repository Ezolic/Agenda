import './Input.css'


const Input = (props) => {
    // const placeholderModificada = `${props.placeholder}...`

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }
    




    return (
        <div className="campo-input">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} maxLength={props.limite} type={props.tipo} required={props.obrigatorio} placeholder={props.placeholder}/>
        </div>
    )
} 

export default Input