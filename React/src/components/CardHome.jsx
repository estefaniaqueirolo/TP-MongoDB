import React from 'react';
import './styles/CardHome.css'
import { Link } from 'react-router-dom';

const CardHome = ({personaje}) => {

    const {nombre, nombrePJ, casaPert, biografia, equipamiento, añoApar, imgURL, _id} = personaje;
    console.log(_id)

  return (
    <Link className='container-detalle' to={`/detalle/${nombrePJ}`}>
        <div className="container-img">
          <img src={imgURL} alt={nombre} />
        </div>
        <div className="container-detalles">
          <h2>{nombrePJ}</h2>
          <div className="container-informacion">
            <p>Biografía: {biografia}</p>
            <p>Año de aparición: {añoApar}</p>
            <p>Personaje de: {casaPert}</p>
          </div>
        </div>
    </Link>
  )
}

export default CardHome