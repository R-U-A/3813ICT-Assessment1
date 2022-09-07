var express = require('express');
var app = express()
var fs = require('fs');

var http = require('http').Server(app);
app.use(express.static(__dirname+'/www')); 

let server = http.listen(3000, function(){
    let host = server.address().address;
    let port = server.address().port;
    console.log("Server listening on port: " + port); 
});

fs.writeFile('users.txt', JSON.stringify([{"userId":"1","userEmail":"smith_joe@gmail.com","userPassword":"pos123","userAdmin":true}, {"userId":"2","userEmail":"joe@gmail.com","userPassword":"pos123","userAdmin":false}, {"userId":"3","userEmail":"smith@gmail.com","userPassword":"pos123","userAdmin":true}, {"userId":"4","userEmail":"h_j@gmail.com","userPassword":"pos123","userAdmin":false}]
), function(err, data)
{
    if(err) throw err;
    else
        console.log('Data written to user.txt')
});

