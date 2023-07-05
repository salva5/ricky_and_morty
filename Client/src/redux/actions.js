import axios from "axios";
import {REMOVE_FAV, ADD_FAV} from "./types-actions"


export const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return  async (dispatch) => {
        try {
            const {data} = await axios.post(endpoint, character)
            console.log(data);
            if(!data.length) throw Error("No hay favoritos")
            return dispatch({
                type: ADD_FAV,
                payload: data
            });
        } catch (error) {
            console.log(error.message);
        }
        
    }
    
}

export const removeFav = (id) => {
    const endpoint =  `http://localhost:3001/rickandmorty/fav/${id}`;
    return async (dispatch) => {
        try {
            const {data} = await axios.delete(endpoint)
            if(!data.length) throw Error("No hay favoritos")
            return dispatch({
                type: REMOVE_FAV,
                payload: data,
            });
        } catch (error) {
            console.log(error.message);   
        }
    };
}

