require('dotenv').config();
require('./database/index');
const routes =  require('./routes');
const express = require('express');
const app = express();

app.use(express.json());
app.use(routes);

const {PORT} = process.env;
app.listen(process.env.PORT, ()=>{
    console.log(`server is on in port ${PORT}`);
});