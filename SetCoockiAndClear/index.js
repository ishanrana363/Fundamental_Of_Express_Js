const  express = require('express');
const app = express();
const port = 8000;

app.get("/one",(req,res)=>{
    res.cookie("name","ishan");
    res.cookie('city',"dhaka");
    res.status(200).send("Cookie set successfully");
});

app.get("/tow",(req,res)=>{
    res.clearCookie("name");
    res.status(200).send("Cookie remove successfully");
});

app.listen(port,()=>{
    console.log(`Server run successfully at http://localhost:${port}`)
});