
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../src/pages/home';
import './App.css';
import EditProduct from './pages/home/editProduct/editProduct';
import CreatePdt from './pages/home/createpdt/create';


function App() {

  return (
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/edit/:id' element={<EditProduct/>} />
        <Route path='/createpdt' element={<CreatePdt />} />
      </Routes>
    </BrowserRouter>
   
  )
}

export default App;
