import "./App.css";
import Nav from "./components/Nav/Nav";
import Cards from "./components/Cards/Cards";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import Register from "./components/Register/Register";
import Error from "./components/Error/Error";
import Favorites from "./components/Favorites/Favorites";
import { useEffect, useContext } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { ContextAccess } from "./context/contextAccess";


const App = () => {
  const { access } = useContext(ContextAccess)
  const navigate = useNavigate()
  const { pathname } = useLocation()
  
  useEffect(() => {
    !access && navigate("/")
  },[access]);
  
  return (
    <div className="App">
      {
        pathname !== "/"  && pathname !== "/register" && 
        <Nav />
      }
      <Routes>
        <Route path="/" element={<Form />}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/home" element={<Cards />}/>
        <Route path="/favorites" element={<Favorites/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<Error/>}/>
      </Routes>
    </div>
  );
};

export default App;
