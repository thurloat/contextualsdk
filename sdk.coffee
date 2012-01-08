express       = require 'express'
swig          = require 'swig'
app           = module.exports = express.createServer()

swig.init
  root: __dirname + '/views'
  allowErrors: true

app.set 'view engine', 'html'
app.set 'view options', {layout: false}
app.register '.html', swig

# Hook up static file serving for JS and CSS bits.
app.use express.static __dirname + '/public'

app.get "/ifr", (req, res) ->
  res.render 'ifr'

app.get "/", (req, res) ->
  res.render 'index'

if not module.parent
  app.listen(8000)
  console.log("Server started at localhost:8080/ !")