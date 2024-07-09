const express = require('express')
const app = express()
const port = 3000;

const multer = require("multer");

var storage = multer.diskStorage({
    destination : (req,file,callBack)=>{
        callBack(null,"./upload");
    },
    filename : (req,file,callBack) =>{

        callBack(null,file.originalname)

    }
});

var upload = multer({ storage : storage }).single("myfile");

app.post("/",(req,res)=>{
    upload(req,res,(err)=>{
        if(err){
            console.log(err);
            res.end("File upload fail");
        }else{
            res.end("File upload success");
        }

    })
})

app.listen(port,()=>{
    console.log(`Server run successfully at http://localhost:${port}`);
});