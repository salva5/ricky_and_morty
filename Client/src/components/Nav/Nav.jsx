import axios from "axios"
import SearchBar from "../SearchBar/SearchBar"
import { NavLink,useNavigate,useLocation } from "react-router-dom"
import styles from "./Nav.module.css"

const Nav = ({onSearch, setCharacters, characters, setAccess, errores, setErrores}) => {
    const {pathname} = useLocation()
    const navigate = useNavigate()

    const onRandom = () => {
        const id = Math.floor(Math.random() * 826)  
        const prevSearch = characters.findIndex(char => char.id === id)
        if(prevSearch >= 0) return 
        axios(`http://localhost:3002/rickandmorty/character/${id}`)
        .then(({data}) =>{
            if(data.name) setCharacters((oldChars) => [...oldChars,data])
            setErrores("")
        })
    }

    const handleLogOut = () => {
        setCharacters([])
        setAccess(false)
        navigate("/")
    }
    return (
        <div className={styles.divNav}>
            <div className={styles.botones}>
                <NavLink to="/home">
                    <button>Home</button>
                </NavLink>
                <NavLink to="/about">
                    <button>About</button>
                </NavLink>
                
                <button onClick={handleLogOut}>log out</button>
            
                <NavLink to="/favorites">
                    <button>Favorites</button>
                </NavLink>
                <button onClick={onRandom}>random</button>

            </div>
            {pathname === "/home"&& <SearchBar onSearch={onSearch} />}
            {errores && <p style={{color:"white"}}>{errores}</p>}
            
        </div>
    )
}

export default Nav;