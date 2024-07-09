const express = require('express');
const app = express();
const port = 5000;


app.use((req,res,next)=>{
    console.log("Application middleware");
    next();
});

app.get("/about",(req,res)=>{
    res.end("About page");
});

app.get("/term",(req,res)=>{
    res.end("About page");
});

app.get("/learn",(req,res)=>{
    res.end("About page");
});

app.get("/concatk",(req,res)=>{
    res.end("About page");
});


app.listen(port,()=>{
    console.log(`Server run succesfully at http://localhost:${port}`)
})