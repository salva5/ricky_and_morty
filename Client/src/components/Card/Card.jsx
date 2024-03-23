import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { addFav, removeFav } from "../../redux/actions/actions";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { removeCharacter } from "../../redux/actions/actionsCharacter";
import styles from './Card.module.css';


const Card = ({id, name, status, species, gender, origin, image }) => {
  const [isFav, setIsFav] = useState(false)
  const { myFavorites } = useSelector(state => state)
  const { pathname } = useLocation()
  const dispatch = useDispatch()

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false)
      dispatch(removeFav(id)) 
    } else {

      setIsFav(true)
      dispatch(addFav({id, name, status, species, gender, origin, image}))
    }
  }
  const onClose = () => {
    dispatch(removeCharacter(id))
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  },[myFavorites])
  return (
    <div className={styles.column}>
      <div className={styles.divCard}>
        <div className={styles.divImage}>
          {
            pathname === "/home" && <button className={styles.botonX} onClick={() => onClose(id)}>X</button>
          }
          <img src={image} alt={name} />
          {
            isFav 
              ? (<button className={styles.botonFav} onClick={handleFavorite}>❤️</button>) 
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

export default Card;
