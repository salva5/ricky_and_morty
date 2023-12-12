import { NavLink } from "react-router-dom";
import { connect } from "react-redux"
import { addFav, removeFav } from "../../redux/actions";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styles from './Card.module.css';


const Card = ({id, name, status, species, gender, origin, onClose, image,addFav, removeFav, myFavorites}) => {
 
  const [isFav, setIsFav] = useState(false)
  const {pathname} = useLocation()
  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false)
      removeFav(id)
    } else {

      setIsFav(true)
      addFav({id, name, status, species, gender, origin, image})
    }
  }
  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === Number(id)) {
        setIsFav(true);
      }
    });
  },[myFavorites])
  return (
    <div className={styles.column}>
      <div className={styles.divCard}>
        <div className={styles.divImage}>
          {pathname === "/home" && <button className={styles.botonX} onClick={() => onClose(id)}>X</button>}
          <img src={image} alt={name} />
          {
          isFav ? (<button className={styles.botonFav} onClick={handleFavorite}>❤️</button>) 
          : (<button className={styles.botonFav} onClick={handleFavorite}>🤍</button>)
        }
        </div>
        <NavLink to={`/detail/${id}`}>
          <h2>{name}</h2>
        </NavLink>
        <h2>{species}</h2>

      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => dispatch(addFav(character)),
    removeFav: (id) => dispatch(removeFav(id))
  }
}
const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Card);
