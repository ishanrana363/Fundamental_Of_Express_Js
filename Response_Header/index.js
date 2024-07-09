const  express = require('express');
const app = express();
const port = 3000;

app.post("/",(req,res)=>{
    res.append("name","Ishan");
    res.append("city","Dinajpur");
    res.append("ocupation","developer");
    res.status(201).send("Set header data");
});


app.listen(port,()=>{
    console.log(`Server run successfully at http://localhost:${port}`);
})
