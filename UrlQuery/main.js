const  express = require('express')
const app = express();
const port = 3000;

app.get("/",(req,res)=>{
    let firstName = req.query.firstName;
    let lastName = req.query.lastName;
    res.send(firstName + " " + lastName)
})


app.listen(port,()=>{
    console.log(`Server run successfully at http://localhost:${port}`);
});