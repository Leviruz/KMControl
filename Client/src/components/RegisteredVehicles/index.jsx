import React from 'react'
import { RVStyle } from './styles'

const RV = () => {
  return (
    <RVStyle>
      <div className="container">
        <h1>Veículos cadastrados:</h1>
        <div className="item1">
          <p className="vehiclename">Nome do veículo</p>
          <p className="saibamais">Saiba Mais</p>
        </div>
        <div className="item1">
            <p>teste</p>
        </div>
        <div className="item1">
            <p>teste2</p>
        </div>
      </div>
    </RVStyle>
  );
}

export default RV