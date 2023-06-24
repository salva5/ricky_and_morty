const getCharById  = require("../controllers/getCharById");
const { postFav, deleteFav } = require("../controllers/handleFavorites");
const login = require("../controllers/login");

const routers = require("express").Router();

routers.get("/character/:id", getCharById);
routers.get("/login", login);
routers.post("/fav", postFav);
routers.delete("/fav/:id", deleteFav);

module.exports = routers;
