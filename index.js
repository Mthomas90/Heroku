const express = require('express')
var stripe = require('stripe')('sk_live_NgaszAbqTWN9bJujiwQufd5q00Jhp5yUh1')
var bodyParser = require('body-parser')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
