import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';
import './styles/DetallePersonaje.css'

const DetallePersonaje = () => {

  const [personaje, setPersonaje] = useState();

  const params = useParams();
  console.log("params: ", params.id)
  
  const ObtenerPersonaje = async() => {
    const result = await fetch(`http://localhost:4040/mostrarindividual/${params.id}`);
    const data = await result.json();
    setPersonaje(data);
  }

  useEffect(() => {
    ObtenerPersonaje()
  }, [])

  console.log(personaje)


  return (
    <>
    <NavBar />
    <div className='container-detallePersonaje'>
      {personaje && 
      <>
        <div className="container-detalle-texto">
          <h1>{personaje.nombrePJ}</h1>
          <p><b>Nombre real: </b>{personaje.nombre}</p>
          <p><b>Biografía: </b>{personaje.biografia}</p>
          <p><b>Año de aparición: </b>{personaje.añoApar}</p>
          <p><b>Personaje de: </b>{personaje.casaPert}</p>
          <div className="container-detalle-buttons">
            <button>Actualizar</button>
            <button>Eliminar</button>
          </div>
        </div>
        <div className="container-detalle-img">
          <img src={personaje.imgURL} alt="" />
        </div>
      </>
      }
    </div>
    </>
  )
}

export default DetallePersonaje