const app = require("./app")

const dotenv = require('dotenv')
dotenv.config({path: './config.env'});

console.log(process.env.RUNNING_PORT)
app.listen(8000, () => {
    console.log("Server run success")
})