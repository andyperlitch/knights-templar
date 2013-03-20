var fs = require('fs');
var path = require('path');
var handlebars = require('handlebars');


function make(type, path) {
    
    // check file existence
    if (! fs.existsSync(path) ) throw new Error("Template file could not be found. Given path: `"+path+"`. cwd: `"+process.cwd()+"`.");
    
    // Read the file
    var file_contents = fs.readFileSync(path).toString('utf8');
    
    switch(type) {
        case "handlebars":
        case "Handlebars":
        case "hbs":
            handlebars.compile(file_contents);
            break;
        
        
    }
}

exports.hbs = function(path) { return make('hbs',path) }

exports.make = make