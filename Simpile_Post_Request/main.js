const express = require('express');

const app = express();
const port = 3000;

app.post("/",(req,res)=>{
    res.send("This is a simple post request");
})


app.listen(port,()=>{
    console.log(`Server run successfully at http://localhost:${port}`);
});