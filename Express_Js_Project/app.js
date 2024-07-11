const express = require("express");
const app = new express();

const router = require("./src/routes/api");

// security middleware

const expressRateLimit =  require("express-rate-limit");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mongoSanitize = require("express-mongo-sanitize");
const cors = require("cors");
const hpp = require("hpp");
const limiter = expressRateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
});

app.use(limiter);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(mongoSanitize());
app.use(hpp());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", router);




module.exports = app;

