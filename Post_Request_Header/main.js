const express = require('express');
const app = express();
const port = 3000;

app.post("/",(req,res)=>{
    let host = req.header("Connection");
    res.send(host);
});




app.listen(port,()=>{
    console.log(`Server run successfully at http://localhost:${port}`);
});