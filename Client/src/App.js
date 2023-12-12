import "./App.css";
import axios from "axios";
import Nav from "./components/Nav/Nav";
import Cards from "./components/Cards/Cards";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import Register from "./components/Register/Register";
import Error from "./components/Error/Error";
import Favorites from "./components/Favorites/Favorites";
import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [errores, setErrores] = useState("")
  const [access, setAccess] = useState(false)
  const navigate = useNavigate()
  const { pathname } = useLocation()
  
  const onSearch = async (id) => {
    
    try {
      const repetida = characters.find(
        (character) => character.id === Number(id)
      );
      const { data } = await axios(`http://localhost:3002/rickandmorty/character/${Number(id)}`)
      if (data.name && !repetida) {
        setCharacters((oldChars) => [...oldChars, data]);
        setErrores("")
      }
      
      
    } catch (error) {
      if(isNaN(id)) setErrores("Solo puedes escribir números")
      else {

        setErrores("Solo exiten 826 personajes")
      }
     
    }
  };
  const onClose = (id) => {
    const deleteCharacter = characters.filter(
      (character) => character.id !== id
    );
    setCharacters(deleteCharacter);
  };
  
  const login = async (userData) => {
    try {
      const { email, password } = userData;
      const URL = 'http://localhost:3002/rickandmorty/login';
  
      const { data } = await axios(URL + `?email=${email}&password=${password}`)
      const { access } = data;
      setAccess(access);
      access && navigate("/home")
      
      
    } catch ({response}) {
      return response.data
    }
  }

  useEffect(() => {
    !access && navigate("/")
  },[access]);
  
  
  return (
    <div className="App">
      {
        pathname !== "/"  && pathname !== "/register" && 
        <Nav 
          setErrores={setErrores}
          errores = {errores}
          onSearch={onSearch} 
          setCharacters={setCharacters} 
          setAccess = {setAccess}
        />
      }
      <Routes>
        <Route path="/" element={<Form login = {login}/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/home" element={<Cards characters={characters} onClose={onClose} />}/>
        <Route path="/favorites" element={<Favorites/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<Error/>}/>
      </Routes>
    </div>
  );
};

export default App;
