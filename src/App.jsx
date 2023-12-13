import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../src/pages/home';
import './App.css';
import Edit from './components/edit';
import MyCard from './components/myCard';

function App() {

  return (
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/edit' element={<Edit/>} />
        <Route path='/shoppingCard' element={<MyCard />} />
      </Routes>
    </BrowserRouter>
   
  )
}

export default App;
