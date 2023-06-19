import style from "./SearchBar.module.css"
import { useState } from "react";
export default function SearchBar({ onSearch }) {
   const [id, setId] = useState("")
   const handleChange = (event) => {
      setId(event.target.value)
      
   }
   
      
   return (
      <div className={style.divSearchBar}>
         <input onChange={handleChange} type='search' value={id} placeholder="..id"/>
         <button onClick={() => onSearch(id)}>Agregar</button>
      </div>
   );
}
