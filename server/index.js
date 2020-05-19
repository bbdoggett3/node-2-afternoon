const express = require('express')
const app = express()
const SERVER_PORT = 3001

app.use(express.json())

//endpoints
//get READ
//post CREATE
//put UPDATE
//delete DELETE

app.listen(SERVER_PORT, () => console.log(`App is listening on por ${SERVER_PORT}`))