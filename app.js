const express = require('express');
const path = require('path');
const app = express();
const port = 3000

app.listen(port, () =>{
    console.log('Se está utilizando el puerto ' + port);
});

const publicPath = path.resolve(__dirname, "./public");

app.use(express.static(publicPath));

app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname , "/views/home.html")
    )})
