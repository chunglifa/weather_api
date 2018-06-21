console.log('ROUTES FILE')
var path = require("path");

module.exports = function (app) {
    app.get('/', function(req, res) {
        res.render("/sanjose");
       });
    
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
        }); 

}

