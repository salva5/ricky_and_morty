import axios from "axios" 
import {REMOVE_FAV, ADD_FAV, ORDER, FILTER } from "../types-actions"


export const addFav = (character) => {
  
  const endpoint = 'http://localhost:3002/rickandmorty/fav'
        
  return async (dispatch) => {
    try {
      const { data } = await axios.post(endpoint, character)
      return dispatch({
        type: ADD_FAV,
        payload: data
      });
    } catch (error) {
      console.log(error.message)
    }
  }
}

export const removeFav = (id) => {
  const endpoint = `http://localhost:3002/rickandmorty/fav/${id}`
  
  return async (dispatch) => {
    try {
      
      const {data} = await axios.delete(endpoint)
    
      return dispatch({
        type: REMOVE_FAV,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  
  
}
export const filterCards = (gender) => {
  return {
    type: FILTER,
    payload: gender
  }
}
export const orderCards = (orden) => {
  return {
    type: ORDER,
    payload: orden 
  }
  
}
export const register = (user) => {
  return async () => {
    try {
      const { data } = await axios.post(`http://localhost:3002/rickandmorty/login`, user)
      if(data.length) return data
    } catch ({response}) {
      return response.data
    }

  }
}
