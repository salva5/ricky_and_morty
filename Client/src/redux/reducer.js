import {
  ADD_FAV,
  REMOVE_FAV,
  ORDER,
  GET_CHARACTERS_ID,
  REMOVE_CHARACTER,
  DELETE_CHARACTERS
} from "./types-actions";

const initialState = {
  characters: [],
  myFavorites: [],
};
const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CHARACTERS_ID:
      return {
        ...state,
        characters: [...state.characters, payload]
      }
    case REMOVE_CHARACTER :{
      const newCharacters = state.characters.filter(
        (character) => character.id !== payload
      );
      return {
        ...state,
        characters: newCharacters
      }
    }
    case DELETE_CHARACTERS:
      return {
        ...state,
        characters: []
      }
    case ADD_FAV:
      return {
        ...state,
        myFavorites: payload,
      };
    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: payload,
      };
    case ORDER:
      const anotherStateCopy = [...state.myFavorites];
      const orderFav =
        payload === "A"
          ? anotherStateCopy.sort((a, b) => a.id - b.id)
          : anotherStateCopy.sort((a, b) => b.id - a.id);
      return {
        ...state,
        myFavorites: orderFav,
      };
    default:
      return { ...state };
  }
};

export default reducer;
