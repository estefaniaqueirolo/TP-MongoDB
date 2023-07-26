import React from 'react';
import './styles/NavBar.css';
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='container-navbar'>
      <div className="container-logo">
        <Link to="/">
          <img src={logo} alt="logo-spa" />
        </Link>
      </div>
      <div className="container-agregar">
        <Link className='btn-agregar' to="/agregarpersonaje"><p>Agregar personaje</p></Link>
      </div>
      <div className="container-busqueda">
        <input type="search" placeholder='Búsque un personaje' />
        <button>Buscar</button>
      </div>
    </div>
  )
}

export default NavBar