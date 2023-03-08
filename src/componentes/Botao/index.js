import './botao.css'

const Botao = (props) => {
    return (
        <div className='btn'>
            <button>{props.children}</button>
        </div>
    ) 
}

export default Botao