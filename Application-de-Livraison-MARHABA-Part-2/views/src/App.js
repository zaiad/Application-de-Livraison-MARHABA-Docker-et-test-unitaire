import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import {Register, Login, ResetPassword, ForgetPassword, Manager, Livreur, Client, NotFound } from './Components/index'


function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/resetpassword' element={<ResetPassword />} />
        <Route path='/forgetpassword' element={<ForgetPassword />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/manager/me' element={<Manager />} />
        <Route path='/client/me' element={<Client />} />
          <Route path='/livreur/me' element={<Livreur />} />  
      </Routes>
    </BrowserRouter>
  );
}

export default App;
