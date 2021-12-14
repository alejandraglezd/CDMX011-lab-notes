import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SignIn from './components/SignIn';
import Notes from './components/Notes';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="SignIn/" element={<SignIn />} />
      <Route path="Notes/" element={<Notes />} />
    </Routes>
    </Router>
  );
}
export default App;

/*
<Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="SignIn/" element={<SignIn />} />
      <Route path="Notes/" element={<Notes />} />
    </Routes>
    </Router>
    */