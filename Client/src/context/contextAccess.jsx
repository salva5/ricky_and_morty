import { useState } from "react";
import { createContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const ContextAccess = createContext()

export const ContextAccessProvider = ({children}) => {
  const [access, setAccess ] = useState(false) 
  const navigate = useNavigate()

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
  return (
    <ContextAccess.Provider 
      value={{
        access,
        login,
        setAccess
      }}
    >
      {children}
    </ContextAccess.Provider>
  )
}
