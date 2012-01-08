express       = require 'express'
swig          = require 'swig'
app           = module.exports = express.createServer()

swig.init
  root: __dirname + '/views'
  allowErrors: true

app.set 'view engine', 'html'
app.set 'view options', {layout: false}

app.register '.html', swig

app.get "/", (req, res) ->
  res.render 'index'

if not module.parent
  app.listen(8000)
  console.log("Server started!")