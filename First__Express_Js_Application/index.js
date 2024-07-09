const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    res.send("First express js server ");
})




app.listen(8000,()=>{
    console.log(`Server run successfully`);
});