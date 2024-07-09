const express = require('express');
const app = express();
const port = 3000;

app.get("/",(req,res)=>{
    let firstName = req.header("User-Agent");
    res.send(firstName);
})

app.listen(port,()=>{
    console.log(`Server run successfully at http://localhost:${port}`);
});