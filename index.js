const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
var device = require('express-device');

express()
  .use(express.static(path.join(__dirname, 'public')))
  .use(device.capture())
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/hello',function(req,res) {
       console.log("Hi to "+req.device.type.toUpperCase()+" User");
    res.send("Hi to "+req.device.type.toUpperCase()+" User");
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
