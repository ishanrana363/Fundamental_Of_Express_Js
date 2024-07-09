const express = require('express');
const app = express();
const port = 5000;

// Route-level middleware for /about route
app.use("/about", (req, res, next) => {
    console.log("Route level middleware");
    next();
});

// Route handlers
app.get("/about", (req, res) => {
    res.end("About page");
});

app.get("/terms", (req, res) => {
    res.end("Terms page");
});

app.get("/learn", (req, res) => {
    res.end("Learn page");
});

app.get("/contact", (req, res) => {
    res.end("Contact page");
});

// Start the server
app.listen(port, () => {
    console.log(`Server running successfully at http://localhost:${port}`);
});
