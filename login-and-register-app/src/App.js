import './App.css';
import Homapage from './components/homepage/homepage.js';
import Login from './components/login/login.js';
import Register from './components/register/register.js';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [user, setUserLogin] = useState({});
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={user && user._id ? <Homapage setUserLogin={setUserLogin} /> : <Login setUserLogin={setUserLogin} />}></Route>
          <Route path='/login' element={<Login setUserLogin={setUserLogin} />}></Route>
          <Route path='register' element={<Register />}></Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
