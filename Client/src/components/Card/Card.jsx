import style from "./Card.module.css";
import { addFav, removeFav } from "../../redux/actions";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { useState, useEffect } from "react";

const Card = ({
  id,
  name,
  status,
  species,
  gender,
  origin,
  onClose,
  image,
  addFav,
  removeFav,
  myFavorites,
}) => {
  const [isFav, setIsFav] = useState(false);
  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav({ id, name, status, species, gender, origin, image });
    }
  };
  useEffect(() => {
    for (let i = 0; i < myFavorites.length; i++) {
      if (myFavorites[i].id === id) setIsFav(true);
    }
  }, [myFavorites, id]);

  const { divCard, divImage, botonFav, botonX } = style;

  return (
    <div className={divCard}>
      <div className={divImage}>
        <button className={botonFav} onClick={handleFavorite}>
          {isFav ? "❤️" : " 🤍"}
        </button>
        <button className={botonX} onClick={() => onClose(id)}>
          X
        </button>
        <img src={image} alt="" />
      </div>
      <h2>
        name: <NavLink to={`/detail/${id}`}>{name} </NavLink>
      </h2>
      <h2>status: {status}</h2>
      <h2>species: {species}</h2>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => dispatch(addFav(character)),
    removeFav: (id) => dispatch(removeFav(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Card);
