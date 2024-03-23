import Card from "../Card/Card";
import { useState } from "react";
import { filterCards, orderCards } from "../../redux/actions/actions";
import { useFavoritesFilters } from "../../hooks/useFavoritesFilters";
import { useDispatch } from "react-redux";
const Favorites = () => {
  const dispatch = useDispatch()
  const { favorites, setGender } = useFavoritesFilters()
  const [aux, setAux] = useState(false);

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
    setAux(true);
  };

  const handleFilter = (event) => {
    setGender(event.target.value)
  };

  

  return (
    <div>
      <select onChange={handleOrder}>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
      </select>
      <select onChange={handleFilter}>
        <option value="Todos">Todos</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">unknown</option>
      </select>
      {
        favorites.map(
          ({ id, name, status, species, gender, origin, image, onClose }) => {
            return (
              <Card
                key={id}
                id={id}
                name={name}
                status={status}
                species={species}
                gender={gender}
                origin={origin}
                image={image}
                onClose={onClose}
              />
            );
          }
        )
      }
    </div>
  );
};
export default Favorites;
