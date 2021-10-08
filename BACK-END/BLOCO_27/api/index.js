const express = require('express');

const app = express();

const PORT = 3000;

const userControllers = require('./controllers/userControllers');

app.post('/user', userControllers.createUser);

app.listen(PORT, () => {
  console.log('Ouvindo na porta 3000')
})