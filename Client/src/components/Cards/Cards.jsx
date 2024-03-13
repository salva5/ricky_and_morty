import { useSelector } from "react-redux";
import Card from "../Card/Card";
import styles from "./Cards.module.css";

const Cards = () => {
  const { characters } = useSelector(state => state)
  return (
    <div className={styles.row}>
      {characters.map(({ id, name, status, species, gender, origin, image }) => {
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
            />
          );
        }
      )}
    </div>
  );
};

export default Cards;
