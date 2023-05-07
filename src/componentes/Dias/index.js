import './Dias.css'


const Dias = (props) => {

    let mes = props.meses.find(o => o.mes === props.mesEscolhido);

    if (mes === undefined) {
        return
    } else {

        const aoDigitado = (evento) => {
            props.aoAlterado(evento.target.value)
        }

        let array = []

        for (let i = 1; i < mes.diaLimite + 1; i++) {
            array.push(<span key={i} className='dia'> {i}  <input required={props.obrigatorio} type="radio" onChange={aoDigitado} name="mes" value={i} /> </span>)
        }

        return (
            <div className='grid-dias'>
                <div className='dias'>
                    {array}
                </div>
            </div>
        )
    }
}

export default Dias


