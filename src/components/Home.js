import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import googleIcon from '../images/googleIcon.png';
// const googleIcon = require('..images/googleIcon.png');

function Home() {
    return (
      <div className="Home">
        <header className="App-header">
          <h1>friendly <br></br>reminders.</h1>
        </header>
          <h3>¡Anótalo aquí!<br></br>para que no se te olvide...</h3>
          <form className="homeForm">
            <input className="inputEmail" placeholder="Correo electrónico"></input>
            <input className="inputPassword" type="password" placeholder="Contraseña"></input>
            <Link to="/Notes">
              <button className="buttonLogin">Inicia sesión</button>
            </Link>
            <h4>o ingresa con</h4>
            <img src={googleIcon} alt=""></img>
            {/* <div className="G">G</div> */}
            <hr></hr>
            <p>¿no tienes una cuenta?</p>
            <Link to="/SignIn">
            <button className="buttonSignIn">Regístrate</button>
            </Link>
          </form>
            <footer className="App-footer">
            © 2021 friendly reminders.  x Alejandra Glez
            </footer>
      </div>
    )
  };
export default Home;
