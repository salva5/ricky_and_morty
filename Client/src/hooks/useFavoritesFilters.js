import { useState } from "react";
import { useSelector } from "react-redux";

export const useFavoritesFilters = () => {
  const { myFavorites } = useSelector(state => state)
  const [ gender, setGender] = useState("");

  const filtercharacters =
    gender !== "" && gender !== "Todos"
      ? myFavorites.filter((char) => char.gender === gender)
      : myFavorites;

  return { favorites : filtercharacters, setGender }
};
