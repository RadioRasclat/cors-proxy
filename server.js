// Listen on a specific host via the HOST environment variable
var host = '127.0.0.1';
// Listen on a specific port via the PORT environment variable
var port = 52001;

var cors_proxy = require('cors-anywhere');
cors_proxy.createServer({
  originWhitelist: ['https://*.radio-rasclat.com/*', 'https://radio-rasclat.com', 'https://www.radio-rasclat.com'], // Allow all origins
  requireHeader: ['origin', 'x-requested-with'],
  removeHeaders: ['cookie', 'cookie2']
}).listen(port, host, function() {
  console.log('Running CORS Anywhere on ' + host + ':' + port);
});
