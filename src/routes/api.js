const express  = require('express')
const HelloController = require("../controllers/HelloController");
const WelcomeController = require('../controllers/WelcomeController')
const router = express.Router()




router.get('/hello-get', HelloController.HelloGet)
router.post('/hello-post', HelloController.HelloPost)
router.get('/welcome', WelcomeController.Welcome)

module.exports = router;
