(function() {
  var app, express, http, proxy, swig, url;

  express = require('express');

  swig = require('swig');

  http = require('http');

  url = require('url');

  app = module.exports = express.createServer();

  swig.init({
    root: __dirname + '/../views',
    allowErrors: true
  });

  app.set('view engine', 'html');

  app.set('view options', {
    layout: false
  });

  app.register('.html', swig);

  app.use(express.static(__dirname + '/../public'));

  app.use(express.bodyParser());

  proxy = function(method, proxyUrl, headers, contentType, postData, callback) {
    var parsedUrl, req, requestOptions;
    parsedUrl = url.parse(proxyUrl);
    requestOptions = {
      host: parsedUrl.host,
      port: 80,
      method: method,
      path: parsedUrl.path
    };
    return req = http.request(requestOptions, function(res) {
      return callback(res);
    });
  };

  app.get("/gadgets/makeRequest", function(req, res) {
    "req.query = {\n  url: 'http://google.com',\n  httpMethod: 'GET',\n  headers: 'Content-Type=text%2Fxml%3Bcharset%3Dutf-8',\n}";
    var contentType, headers, method, proxyUrl, q;
    q = req.query;
    proxyUrl = q.url;
    headers = q.headers;
    contentType = q.contentType;
    method = q.httpMethod;
    return proxy(method, proxyUrl, headers, contentType, {}, function(proxyResponse) {
      res.writeHead(200, {
        'content-type': contentType
      });
      return res.end(proxyResponse);
    });
  });

  app.get("/ifr", function(req, res) {
    return res.render('ifr');
  });

  app.get("/", function(req, res) {
    return res.render('index');
  });

  app.listen(8000);

  console.log("Server started at localhost:8000");

}).call(this);
