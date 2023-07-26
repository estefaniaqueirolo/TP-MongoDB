import React, {useState, useEffect} from 'react'
import CardHome from '../components/CardHome';
import NavBar from '../components/NavBar';
import './styles/Home.css'

const Home = () => {

  const [personajes, setPersonajes] = useState();

  const ObtenerPersonajes = async() => {
    const result = await fetch(`http://localhost:4040/personajes`);
    const data = await result.json();
    setPersonajes(data);
  }

  useEffect(() => {
    ObtenerPersonajes()
  }, [])

  console.log(personajes)
  

  return (
    <>
    <NavBar />
    <br />
    <div className="container-card-personajes">
        {personajes && personajes.map((personaje,index) =>{
            return(
                <CardHome personaje={personaje} key={index} />
            )
        })}
    </div>
    </>
  )
}

export default Home