var assert = require('assert');
describe("A template-generating knight templar", function() {
    
    var knight = require("../knights-templar");
    
    it("should compile handlebar templates by default", function() {
        var path = __dirname + "/handlebars.html";
        var template = knight.make(path);
        assert.equal(template({ name:"test" }),'<p>test</p>');
    });
    
    it("should compile underscore templates too, with aliases", function() {
        var path = __dirname + "/underscore.html";
        var template = knight.make(path,"_");
        var template2 = knight.make(path,"underscore");
        assert.equal(template({ name:"test" }),'<p>test</p>');
    });
    
    it("should accept common aliases for types", function() {
        var path = __dirname + "/handlebars.html";
        var data = {name: "aliases"};
        var template = knight.make(path);
        var template2 = knight.make(path,"hbs");
        var template3 = knight.make(path,"handlebars");
        var template4 = knight.make(path,"Handlebars");
        assert.ok(template(data) === template2(data));
        assert.ok(template(data) === template3(data));
        assert.ok(template(data) === template4(data));
    });
    
    it("should complain if a file does not exist", function() {
        var badCall = function() {
            knight.make(__dirname+'/notafile')
        }
        assert.throws(badCall);
    });
    
})