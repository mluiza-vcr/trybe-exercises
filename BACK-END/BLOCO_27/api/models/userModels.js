const connection = require('./connection');

const createUser = async (firstName, lastName, email, password) => {
  const db = await connection();
  
  const newUser = await db.collection('users').insertOne({
    firstName,
    lastName,
    email,
    password
  });
  return {
    _id: newUser.insertedId,
    firstName,
    lastName,
    email,
    password
  };
}

module.exports = {
  createUser
};