import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/nav/Navbar';
import Home from './Home';
import Dashboard from './Dashboard';
import Login from './Login';
import Signup from './Signup';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      {/* Everything inside Routes changes based on the URL */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
