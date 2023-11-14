const express = require('express');
const { loginRoutes, userRoutes, categoriesRoutes, postRoutes } = require('./routes');

// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/health', (_request, response) => {
  response.status(200).json({ message: 'ok' });
});

app.use(express.json());
app.use('/login', loginRoutes);

app.use('/user', userRoutes);
app.use('/categories', categoriesRoutes);
app.use('/post', postRoutes);

//

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
