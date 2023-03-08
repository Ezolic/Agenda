import './Botao.css'

const BotaoAbrirModal = (props) => {
    return (
        <button onClick={ () => props.AbrirModal(true)}>
            {props.texto}
        </button>



    )
}
export default BotaoAbrirModal