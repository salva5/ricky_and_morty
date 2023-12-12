import axios from  "axios"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const Detail = () => {
    const [character, setCharacter] = useState({})
    const {id} = useParams()
    useEffect(() => {
        axios(`http://localhost:3002/rickandmorty/character/${id}`)
        .then(({ data }) => {
            if (data.name) setCharacter(data); 
        })
        .catch((error) => alert("No hay personajes con ese ID"))
        return setCharacter({});
    },[id]);
    return (
        <div>
            <h2>{character?.name}</h2>
            <h2>{character?.status}</h2>
            <h2>{character?.species}</h2>
            <h2>{character?.gender}</h2>
            <h2>{character?.origin}</h2>
            <img src={character?.image} alt={character?.name} />
        </div>
    )
}
export default Detail;