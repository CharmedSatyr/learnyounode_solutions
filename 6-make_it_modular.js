//6 MAKE IT MODULAR
var dir = process.argv[2];
var ext = process.argv[3];
var fn = require('./6b-module.js');

fn(dir, ext, function(err, data) {
    if (err) {
        console.error(err)
    } else {
        data.map(item => console.log(item));
    }
});
