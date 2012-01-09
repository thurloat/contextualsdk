express       = require 'express'
swig          = require 'swig'
xml2js        = require 'xml2js'
fs            = require 'fs'
http          = require 'http'
url           = require 'url'
app           = module.exports = express.createServer()

swig.init
  root: __dirname + '/../views'
  allowErrors: true

app.set 'view engine', 'html'
app.set 'view options', layout: false
app.register '.html', swig

# Hook up static file serving for JS and CSS bits.
app.use express.static __dirname + '/../public'

# Enable parsing of post body data.
app.use express.bodyParser()

# Proxy method
# acts as the makeRequest proxy server.
# does not work yet.
proxy = (method, proxyUrl, headers, contentType, postData, callback) ->
  parsedUrl = url.parse proxyUrl
  requestOptions =
    host: parsedUrl.host
    port: 80
    method: method
    path: parsedUrl.path

  req = http.request requestOptions, (res) ->
    # TODO: Implement this
    callback res

app.get "/gadgets/makeRequest", (req, res) ->
  """
  req.query = {
    url: 'http://google.com',
    httpMethod: 'GET',
    headers: 'Content-Type=text%2Fxml%3Bcharset%3Dutf-8',
  }
  """
  q = req.query
  proxyUrl = q.url
  headers = q.headers
  contentType = q.contentType
  method = q.httpMethod

  proxy method, proxyUrl, headers, contentType, {}, (proxyResponse) ->
    res.writeHead 200,
      'content-type': contentType
    res.end proxyResponse

#app.post "/gadgets/makeRequest", (req, res) ->
#  proxy req, res

app.get "/ifr", (req, res) ->
  # Read in the application manifest file.
  appXMLPath = req.query.application

  parser = new xml2js.Parser()

  fs.readFile __dirname + '/../' + req.query.application, (error, data) ->
    # Parse the xml file through xml2js parser
    parser.parseString data, (err, result) ->

      gadgetBlock = null

      # Find the Extension block in the XML that points to the gadget.xml file.
      for ext in result.Extension
        if ext['@'].type is 'gadget'
          gadgetBlock = ext
      
      gadgetUrl = gadgetBlock.Url
      console.log gadgetUrl

  res.render 'ifr'

app.get "/", (req, res) ->
  res.render 'index'

app.listen 8000
console.log "Server started at localhost:8000"
