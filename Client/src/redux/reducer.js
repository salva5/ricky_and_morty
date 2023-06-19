import { ADD_FAV, REMOVE_FAV } from "./types-actions"


const initialState = {
    myFavorites: []
}

const reducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.myFavorites, payload]
            };
        case REMOVE_FAV:
            const borrarPersonaje = state.myFavorites.filter(personaje => personaje.id !== Number(payload));
            return {
                ...state,
                myFavorites: borrarPersonaje
            };
        default:
            return{
                ...state
            };
    }
}


export default reducer;
