import './BotaoFechar.css'

const BotaoFechar = (props) => {

    
    return (
        <div className='fechar'>
            <button onClick={() => props.FecharModal(false)}>
                X   
            </button>
        </div>
    )
}
export default BotaoFechar 