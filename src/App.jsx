
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { Homepage } from './pages/Homepage';
import Layout from "./pages/theme/Layout";
import Home from "./pages/Home";
import Back from "./pages/AddDoctor";
import Exit from "./pages/AddTable";
import Login from "./pages/Login";
import AddDoctor from "./pages/AddDoctor";
import AddTable from "./pages/AddTable";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>} >
            <Route path="/home" element={<Login/>} />
            <Route path="/doctor" element={<AddDoctor/>} />
            <Route path="/table" element={<AddTable/>} />

             




          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;