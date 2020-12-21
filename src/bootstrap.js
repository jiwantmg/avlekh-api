const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./models');


const { 
   customerController, 
   staffController, 
   authController, 
   tasksController,
   usersController   
} = require('./api');

const { 
   logginMiddleware, 
   authMiddleware,
   jwtAuthMiddleware
} = require('./middlewares');

const createApp = () => { 
   const app = express();
   
   // authenticate to db   
   // db.authenticate()
   // .then(() => console.log("Database connected"))
   // .catch(err => console.log('Error ' + err));

   // db.sync({
   //    logging: console.log,
   //    force: true,
   //    alter: true
   // }).then(() => {
   //    console.log("Connection to database stablished successfully");
   // })

   // db.sequelize.authenticate().then(() => {
   //    console.log("Connected to database");
   // });   
   db.sequelize.sync().then(() => {
      console.log("Connected to database");
   });
   // use cors   
   app.use(cors());
   
   // apply middlewares
   app.use(logginMiddleware);   
   app.use(jwtAuthMiddleware);
   app.use(express.json());
   app.use(
      customerController, 
      staffController, 
      authController,
      tasksController,
      usersController
   );
   
   app.listen(3000, function() {
    console.log(`Server is listening http://localhost:3000`);
   });
}

module.exports = createApp;