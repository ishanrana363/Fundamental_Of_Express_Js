const  express = require('express')
const app = express()
const port = 3000;

app.get("/",(req,res)=>{
    res.status(200).send("Response status code success");
});
app.post("/create",(req,res)=>{
    res.status(201).send("Response status created");
});

app.get("/not-found",(req,res)=>{
    res.status(404).send("Response status code not found");
})

app.get("/error",(req,res)=>{
    res.status(500).end("Internal server error");
});

app.listen(port,()=>{
    console.log(`Server run successfully at http://localhost:${port}`); 
});