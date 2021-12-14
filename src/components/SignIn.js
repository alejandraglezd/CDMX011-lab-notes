import React from 'react';
import './SignIn.css';

function SignIn () {
    return (
    <div className="SignIn">
      <header className="App-header">
          <h1>friendly <br></br>reminders.</h1>
        </header>
        <h3>Mejor tarde que nunca ;)</h3>
    <form className="homeForm">
            <input className="inputEmail" placeholder="Correo electrónico"></input>
            <input className="inputPassword" type="password" placeholder="Contraseña"></input>
            <button className="buttonSignIn">Regístrate</button>
          </form>
          <footer className="App-footer">
            © 2021 friendly reminders.  x Alejandra Glez
        </footer>
    </div>
    );
};
export default SignIn;