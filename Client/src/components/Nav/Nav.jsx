import SearchBar from "../SearchBar/SearchBar"
import { NavLink,useNavigate,useLocation } from "react-router-dom"
import styles from "./Nav.module.css"
import { useDispatch, useSelector } from "react-redux"
import { deleteCharacters, getCharactersId } from "../../redux/actions/actionsCharacter"
import { useContext } from "react"
import { ContextAccess } from "../../context/contextAccess"

const Nav = () => {
  const { setAccess } = useContext(ContextAccess)
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const { characters } = useSelector(state => state)
  const dispatch = useDispatch()

  const onRandom = () => {
    const id = Math.floor(Math.random() * 826)  
    const prevSearch = characters.findIndex(char => char.id === id)
    if(prevSearch >= 0) return 
    dispatch(getCharactersId(id)) 
  }

    const handleLogOut = () => {
      dispatch(deleteCharacters())
      setAccess(false)
      navigate("/")
    }
    return (
        <div className={styles.divNav}>
            <div className={styles.vistas}>
                <NavLink to="/home">
                    <h4>Home</h4>
                </NavLink>
                
                <NavLink to="/favorites">
                    <h4>Favorites</h4>
                </NavLink>
                <NavLink to="/about">
                    <h4>About</h4>
                </NavLink>

            </div>
            <div className={styles.search}>

                {pathname === "/home"&& <SearchBar />}
            
                {/* <button onClick={onRandom}>random</button> */}
                <h4 onClick={handleLogOut}>log out</h4>
            </div>
            
        </div>
    )
}

export default Nav;