import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Components/Homepage';
import Signup from './Components/Signup';
import Confirmation from './Components/Confirmation';
import Confirmdeleted from './Components/Confirmdeleted';
import Cancel from './Components/Cancel';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/confirmation" element={<Confirmation />}></Route>
      <Route path="/deleterequest" element={<Cancel />}></Route>
      <Route path="/deletedmember" element={<Confirmdeleted />}></Route>
    </Routes>  
    </BrowserRouter>
  );
}

export default App;
