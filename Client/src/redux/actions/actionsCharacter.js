import axios from "axios";
import { DELETE_CHARACTERS, GET_CHARACTERS_ID, REMOVE_CHARACTER } from "../types-actions";

export const getCharactersId = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios(`http://localhost:3002/rickandmorty/character/${id}`);
      if (data.name) {
        return dispatch({
          type:GET_CHARACTERS_ID,
          payload:data
        })
      }
    } catch (error) {
      console.log(error); 
    }
  };
};
export const removeCharacter = (id) => {
  return {
    type: REMOVE_CHARACTER,
    payload: id
  }
}
export const deleteCharacters = () => {
  return {
    type: DELETE_CHARACTERS
  }
}

