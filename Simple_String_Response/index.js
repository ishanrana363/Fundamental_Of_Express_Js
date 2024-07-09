const express = require("express");

const app = express();


const port = 8080;

app.get("/one",(req,res)=>{
    res.send("This is a simple request");
});

app.post("/tow",(req,res)=>{
    res.send("This is a simple post request ");
});


app.listen(port,()=>{
    console.log(`Server run successfully at http://localhost:${port} `  );
});