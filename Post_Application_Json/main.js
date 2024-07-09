const express = require('express');
const bodyParser = require("body-parser")
const app = express();
const port = 3000;
app.use(bodyParser.json());

app.post("/",(req,res)=>{
    let name = req.body;
    let jsonData = JSON.stringify(name);
    res.send(jsonData);
})



app.listen(port,()=>{
    console.log(`Server run successfully at http://localhost:${port}`);
});
