const express = require('express');
var multer = require('multer');
const app = express();
const port = 3000;

var multer = multer()

app.use(multer.array())

app.use(express.static("public"));

app.post("/",(req,res)=>{
    let jsonData = req.body;
    res.send(JSON.stringify(jsonData));
})

app.listen(port,()=>{
    console.log(`Server run successfully at http://localhost:${port}`);
});
