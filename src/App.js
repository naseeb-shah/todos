import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './component/homepage'
import Login from './component/login'
import Register from './component/reg'
import Todos from './component/todo'
import { useSelector, useDispatch } from 'react-redux'

function App() {
  const auth = useSelector((state) => state.Auth.value)
console.log(auth)
  return (
    <Routes>
    <Route path="/" element={<Home />}>
      
      <Route path="log" element={< Login/>} />
      <Route path="reg" element={<Register />} />
      <Route path="todo" element={<Todos />} />
    
    </Route>
  </Routes>
   
  );
}

export default App;
