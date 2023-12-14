const express = require('express');
const app = express();
const { ServerConfig } = require('./config');
const apiRoutes = require('./routes');
const { DatabaseConnection } = require('./config');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', apiRoutes);


//database sync
DatabaseConnection.db.sequelize.sync()
  .then(() => {
    console.log('Synced db')
  })
  .catch((err) => {
    console.log('Failed to sync db:' + err.message)
  })

app.listen(ServerConfig.PORT, () => {
  console.log(`App listening on port ${ServerConfig.PORT}`)
})

