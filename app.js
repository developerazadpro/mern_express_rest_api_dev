const express = require('express')
const router = require("./src/routes/api");
const app = express()

// security middleware import
const helmet = require('helmet')
const cors= require('cors')
const bodyParser = require('body-parser')
const hpp = require('hpp')
const xssClean = require('xss-clean')
const mongoSanitize = require('express-mongo-sanitize')
const rateLimit = require('express-rate-limit')


// security middleware implementation
app.use(helmet())
app.use(cors())
app.use(bodyParser.json())
//app.use(bodyParser.urlencoded())
app.use(hpp())
app.use(xssClean())
app.use(mongoSanitize())

// rate limit
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit to each IP to 100 request per 15 minutes
    standardHeaders: true, // Return rate limit info in the 'RateLimit' header
    legacyHeaders: false
})
// apply rate limiting middleware to all request
app.use(limiter)



app.use("/api/v1", router)

// undefined route
app.use("*", (req, res) => {
    res.status(404).json({
        status: "failed",
        message: "Data not found"
    })
})
module.exports = app