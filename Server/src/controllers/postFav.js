
const { Favorite } = require("../DB_connection");

module.exports = async (req, res) => {
    
    try {
        const {name, origin, status, image, species, gender } = req.body;
        
        if(!name || !origin || !status || !image || !species || !gender) return res.status(401).send("Faltan datos");
        await Favorite.findOrCreate({where:{name, origin, status, image, species, gender}})
        const usersFav = await Favorite.findAll()
        console.log(usersFav);
        return res.json(usersFav);
        
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
