const express = require('express');
const bodyParser = require('body-parser');
const { customerController, staffController } = require('./api');

const createApp = () => {
   const app = express();
   app.use(express.json());
   app.use(customerController, staffController);

   app.listen(3000, function() {
    console.log(`Server is listening http://localhost:3000`);
   });
}

module.exports = createApp;