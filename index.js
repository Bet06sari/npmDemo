var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req, res){
    if (req.url == "/"){
        fs.readFile("index.html", function(err,html){
            res.write(html);
            res.end();
        });
    }else if (req.url== "/products"){
        fs.readFile("product.html", function(err,html){
            res.write(html);
            res.end();
        });
    }else {
        fs.readFile("404.html", function(err,html){
            res.write(html);
            res.end();
        });
    }
});

server.listen(3000, ()=>{
    console.log("Server is running on port 3000\n");
});