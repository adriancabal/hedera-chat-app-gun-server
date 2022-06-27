const express = require('express')
const Gun = require('gun');
const app = express()
const port = 3030;

app.use(Gun.serve); // use Gun.serve middleware

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

const server = app.listen(port, ()=>{
    console.log("Gun server listening at port: " + port);
});

Gun({ web: server });
// Gun({ file: 'db/data', web: server });
