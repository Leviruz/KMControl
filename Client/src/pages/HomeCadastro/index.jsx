import React from 'react'
import { HomeCadastroStyle } from './styles'
import { Link } from 'react-router-dom'

const HomeCadastro = () => {
  return (
    <HomeCadastroStyle>
    <div className='container'>
      <Link to="/cadastrar-veiculo">
        <button className="btn_1">
            Veículo
        </button>
      </Link>
      <Link to="/cadastrar-itinerário">
        <button className="btn_1">
            Itinerário
        </button>
      </Link>
        <button className="btn_1">
            Secretaria
        </button>
        <button className="btn_1">
            Motorista
        </button>
        <button className="btn_2">
            Corrida
        </button>
    </div>
    </HomeCadastroStyle>
  )
}

export default HomeCadastro