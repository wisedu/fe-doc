

var fs = require('fs');
var exec = require('child_process').exec;

module.exports.createFile = function (text, callback) {
    fs.writeFile('./var.less', text,  function(err) {
        if (err) {
            return console.error(err);
        }
        exec("lessc ./skin.less>./skin.css",function(){
            fs.readFile('./skin.css', function (err, data) {
                if (err) {
                    return console.error(err);
                }
                callback(data.toString());
            });
        });
    });
};


