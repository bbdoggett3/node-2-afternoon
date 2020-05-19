const express = require('express')
const app = express()
const messageCtrl = require('./controllers/message_controller')
const SERVER_PORT = 3001

app.use(express.json());
app.use(express.static(__dirname + '/../public/build'));

//endpoints
app.post(`/api/messages`, messageCtrl.create);
app.get(`/api/messages`, messageCtrl.read);
app.put(`/api/messages/:id`, messageCtrl.update);
app.delete(`/api/messages/:id`, messageCtrl.delete);

app.listen(SERVER_PORT, () => console.log(`App is listening on port ${SERVER_PORT}`))