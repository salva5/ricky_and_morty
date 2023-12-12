const axios = require("axios");
const URL = `https://rickandmortyapi.com/api/character`;

const getCharById = async (req, res) => {
  
  try {
  
    const { id } = req.params;
    const { data } = await axios(`${URL}/${Number(id)}`)
    
    if(!data.name) return res.status(404).send("Not found")
    const {status,name,species,origin,image,gender} = data
   
    const character = {
      id: Number(id),
      status,
      name,
      species,
      origin: origin?.name,
      image,
      gender
    }
    return res.status(200).json(character)
   
  } catch (error) {
   
    return res.status(500).send(error.message)
  };
}  

module.exports = getCharById;
