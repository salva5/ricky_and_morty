const axios = require("axios");
const URL = `https://rickandmortyapi.com/api/character`;

const getCharById = async (req, res) => {
  
  try {
    const { id } = req.params;
  
    const response  = await axios.get(`${URL}/${id}`)
    const { status, name, species, origin, image, gender } = response.data

    if (!name) throw new Error("Not Found")
    let character = {
      id,
      status,
      name,
      species,
      origin,
      image,
      gender,
    };

    return res.status(200).json(character);
    
  } catch (error) {
    res.status(500).send(error.message);
  }
    
};

module.exports = getCharById;
