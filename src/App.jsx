
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { Homepage } from './pages/Homepage';
import Layout from "./pages/theme/Layout";
import Home from "./pages/Home";
import Back from "./pages/Back";
import Exit from "./pages/Exit";
import Login from "./pages/Login";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>} >
            <Route path="/home" element={<Login/>} />
            <Route path="/back" element={<Back/>} />
            <Route path="/exit" element={<Exit/>} />

             




          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;