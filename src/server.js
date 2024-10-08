require('dotenv').config()
const express = require('express')
const path = require('path')

const app = express()
const connection = require('./config/database')
const configViewEngine = require("./config/viewEngine")
const webRoutes = require('./routes/web')
//config template engine
configViewEngine(app);

app.use('/', webRoutes);
const port = process.env.PORT || 8888
const hostname = process.env.HOST_NAME


//test connect


// A simple SELECT query
connection.query(
  'SELECT * FROM Users u ;',
  function (err, results, fields) {
    console.log("check result=", results); // results contains rows returned by server
  }
);

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})