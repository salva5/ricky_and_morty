import Card from '../Card/Card.jsx';
import styles from "./Cards.module.css"

export default function Cards({characters, onClose}) {
   return (
      <div className = {styles.divClass}>
         {
            characters?.map(({id, name, status, species, gender, origin, image},i) =>{
               return <Card 
                  key = {i}
                  id={id}
                  name={name}
                  status={status}
                  species={species}
                  gender={gender}
                  origin={origin.name}
                  image={image}
                  onClose={onClose}
               />
               
            })
         }
      </div>
   )
}
