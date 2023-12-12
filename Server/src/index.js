const express = require("express");
const morgan = require("morgan")
const server = express();
const routes = require("./routes/index");
const PORT = 3002;
const { conn } = require('./DB_connection')
server.use(morgan("dev"))
server.use(express.json());

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.use("/rickandmorty", routes);
  
conn.sync({force: true})
server.listen(PORT, () => console.log(`Server raised in port: ${PORT}`));


