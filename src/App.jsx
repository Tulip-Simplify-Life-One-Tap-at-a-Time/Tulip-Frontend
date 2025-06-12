import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from'./pages/Login';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Task from './pages/Task';
import Streak from './pages/Streaks';



function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/Dashboard" element={<Dashboard/>} />
      <Route path="/Task" element={<Task/>}/>
      <Route path="/Streaks" element={<Streak/>}/>
    </Routes>
  );
}

export default App;