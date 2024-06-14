const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Добавьте эту строку
const { sequelize } = require('./models');

const app = express();
const port = 5000; // Измените номер порта здесь

app.use(cors()); // Добавьте эту строку для включения CORS
app.use(bodyParser.json());
app.use('/api', require('./routes'));

sequelize.sync()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
