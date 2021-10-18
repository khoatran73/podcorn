let http = require('http');
let url = require('url');
let fs = require('fs');

http.createServer(function (req, res) {
    let query = url.parse(req.url, true);
    let fileName = "." + query.pathname;
    fs.readFile(fileName, function(err, data) {
        if (err) {
            console.log(err);
            res.writeHead(404, {'content-type': 'text/plain'});
            return res.end('File not found');
        }
        res.writeHead(200, {'content-type': 'text/html'});
        res.write(data);
        return res.end();
    })
}).listen(8080);