const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const { loginRoutes, userRoutes, categoriesRoutes, postRoutes } = require('./routes');

const app = express();

app.get('/health', (_request, response) => {
  response.status(200).json({ message: 'Hello World!' });
});

app.use(express.json());
app.use('/login', loginRoutes);

app.use('/user', userRoutes);
app.use('/categories', categoriesRoutes);
app.use('/post', postRoutes);

module.exports = app;
