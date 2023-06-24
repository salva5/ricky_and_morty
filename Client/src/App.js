import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import { useState, useEffect } from "react";
import Nav from "./components/Nav/Nav.jsx";
import axios from "axios";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Detail from "./components/Detail/Detail.jsx";
import About from "./components/About/About.jsx";
import Error from "./components/Error/Error";
import Form from "./components/Form/Form.jsx";
import Favorites from "./components/Favorites/Favorites";

function App() {
  const [characters, setCharacters] = useState([]);
  const { pathname } = useLocation();
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();
  

  const login = async (userData) => {
    try {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';

      const {data} =  await axios(URL + `?email=${email}&password=${password}`)
      const { access } = data;
      setAccess(access);
      access && navigate('/home');
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);
  
  const onSearch = async (id) => {
    try {
      const response = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
      const {data} = response
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]); 
      }
      
    } catch (error) {
      
      alert("¡No hay personajes con este ID!");
    }
  };
  const onClose = (id) => {
    setCharacters(
      characters.filter((personaje) => personaje.id !== id)
      );
      console.log(typeof id,characters.id);
  };

  return (
    <div className="App">
      {pathname !== "/" && <Nav onSearch={onSearch} />}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />{" "}
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
