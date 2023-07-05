const getCharById  = require("../controllers/getCharById");
const postFav = require("../controllers/postFav");
const postUser = require("../controllers/postUser");
const login = require("../controllers/login");
const deleteFav = require("../controllers/deleteFav");

const routers = require("express").Router();

routers.get("/character/:id", getCharById);
routers.get("/login", login)
routers.post("/login", postUser);
routers.post("/fav", postFav);
routers.delete("/fav/:id", deleteFav);

module.exports = routers;
