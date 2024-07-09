const express = require("express");
const app = express();

const port = 3000;

app.get("/",(req,res)=>{
    const data = [
        {
            name : "Ishan",
            passion : "Enginner",
            home : "Dinajpur"
        },
        {
            name : "Rana",
            passion : "Developer",
            home : "birol"
        }
    ];

    res.status(200).json(data)

})


app.listen(port,()=>{
    console.log(`Server run successfully at http://localhost:${port}`);
});