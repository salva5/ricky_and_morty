import { ADD_FAV, REMOVE_FAV, ORDER, FILTER } from "./types-actions"


const initialState = {
    myFavorites: [],
    allCharacters: []
}
const reducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites: payload,
                allCharacters: payload
            };
        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: payload,
                allCharacters:payload
            };
        case FILTER:
            const filtercharacters = state.allCharacters.filter(char => char.gender === payload)
            return {
                ...state,
                myFavorites: payload === "Todos" ? [...state.allCharacters]: filtercharacters
            }
        case ORDER:
            const anotherStateCopy = [...state.myFavorites]
            const orderFav = payload === "A" ? anotherStateCopy.sort((a,b) => a.id - b.id)
            : anotherStateCopy.sort((a,b) => b.id - a.id)
            return {
                ...state,
                myFavorites: orderFav
            }   
        default:
            return{...state};
    }
}


export default reducer;
