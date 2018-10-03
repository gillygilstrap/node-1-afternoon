const express = require('express')
const bodyParser = require('body-parser')
const msgController = require('./controllers/messages_controller')

const app = express();
app.use(bodyParser.json());
app.use( express.static( __dirname + '/../public/build' ) );

const msgBaseUrl = '/api/messages';
app.post('/api/messages', msgController.createMsg);
app.get('/api/messages', msgController.readMsg);
app.put(`${msgBaseUrl}/:id`, msgController.editMsg)
app.delete(`${msgBaseUrl}/:id`, msgController.deleteMsg)


const port = 3001;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})  

