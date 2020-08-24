const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { 
   customerController, 
   staffController, 
   authController, 
   tasksController 
} = require('./api');

const { 
   logginMiddleware, 
   authMiddleware 
} = require('./middlewares');

const createApp = () => {
   const app = express();

   // use cors   
   app.use(cors());
   
   // apply middlewares
   app.use(logginMiddleware);   
   app.use(express.json());
   app.use(
      customerController, 
      staffController, 
      authController,
      tasksController
   );
   
   app.listen(3000, function() {
    console.log(`Server is listening http://localhost:3000`);
   });
}

module.exports = createApp;