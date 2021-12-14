import React from 'react';
import './Notes.css';

const Notes = () => (
    <div className="Notes">
        <header className="App-header">
          <h1>friendly <br></br>reminders.</h1>
        </header>
        <h3>A las palabras se las lleva el viento, qué bien que regresaste para vaciarlas aquí</h3>
        <section className="note2">
            <textarea className="note"></textarea>
        </section>
        <button className="addNote">Agregar nota</button>
        {/* <button className="editNote">Editar</button>
        <button className="deleteNote">Borrar</button> */}
        <footer className="App-footer">
            © 2021 friendly reminders.  x Alejandra Glez
        </footer>
    </div>
);
export default Notes;