import SearchBar from "../SearchBar/SearchBar.jsx" 
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css"


const Nav = ({onSearch}) => {
    return (
        <div className={styles.divNav}>
            <div className= {styles.botones}>
                <NavLink to= "/home">
                    <button>Home</button>
                </NavLink>
                <NavLink to="/about">
                    <button>About</button>
                </NavLink>
                <NavLink to="/favorites">
                    <button>Favorites</button>
                </NavLink>
            </div>
            <SearchBar onSearch={onSearch} />
        </div>
    )
}

export default Nav;