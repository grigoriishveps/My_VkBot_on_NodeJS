console.log("Hello");
//    "start": "gulp & nodemon app.js",
//    "restart": "pm2 startOrRestart ecosystem.config.js",
//    "deploy": "pm2 deploy ecosystem.config.js production"
let express = require('express');
let app = express();
const {PORT,CONFIRMATION} = require('./config')

const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/',  (req, res) =>{
    res.send('Hello Worldwef!');
});
app.post('/', (req, res) => {

    const {body} = req;
    switch(body.type){
        case 'confirmation':
            res.send(CONFIRMATION);
            break;
        case "message_new":
            console.log(body);
            res.send("ok");
            break;
        default:
            res.send("ok");
    }
    res.send()
});

app.listen(PORT, function () {
    console.log(`Example app listening on port ${PORT}!`);
});