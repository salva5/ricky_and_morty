const { User } = require("../DB_connection");

module.exports = async (req, res) => {
  try {
    const { nombre, email, password } = req.body;

    if (!nombre || !email || !password) return res.status(400).send("Datos incompletos");

    const user = await User.findOrCreate({
      where: { nombre, email, password },
    });
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
