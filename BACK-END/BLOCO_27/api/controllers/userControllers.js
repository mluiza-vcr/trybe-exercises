const userModels = require('../models/userModels');

const createUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const newUser = await userModels.createUser(firstName, lastName, email, password);
  res.status(201).json({ message: "Usuário cadastrado com sucesso!", newUser});
};

module.exports = {
  createUser
};