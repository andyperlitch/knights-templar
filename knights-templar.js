var fs = require('fs');
var path = require('path');
// var handlebars = require('handlebars');
var _ = require('underscore');

// File reading method
function getFileContents(path) {
    // check for browser
    if (typeof window !== 'undefined') {
        // make synchronous XHR
        var xhr = new XMLHttpRequest();
        xhr.open('get', (window.KT_BASE_URL || '/') + path, false);
        var res = xhr.send();
        return xhr.response;
    } else {
        // Check file existence
        if (! fs.existsSync(path) ) throw new Error("Template file could not be found. Given path: `"+path+"`. cwd: `"+process.cwd()+"`.");
        return fs.readFileSync(path).toString('utf8');
    }
}


// Main make method
function make(path, type) {
    
    // Read the file
    var file_contents = getFileContents(path);
    
    // Default type
    type = type || 'hbs'
    
    // Compile with appropriate library
    switch(type) {
        // case "handlebars":
        // case "Handlebars":
        // case "hbs":
        //     return handlebars.compile(file_contents);
        
        case "_":
        case "underscore":
        case "erb":
            return _.template(file_contents);
    }
}

exports.make = make
