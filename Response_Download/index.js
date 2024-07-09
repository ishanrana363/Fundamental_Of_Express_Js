const express = require('express');
const app = express();
const path = require("path");
const port = 3000;

app.get("/download", (req, res) => {
    const filePath = path.join(__dirname, "./upload/mern.pdf");
    res.download(filePath, "mern.pdf", (err) => {
        if (err) {
            console.log(err);
            res.status(500).send("Internal server error");
        } else {
            // No need to send a success message here because res.download ends the response
            console.log("Download successfully");
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});