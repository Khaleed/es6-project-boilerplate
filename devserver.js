var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var config = require("./webpack.config");

// using the webpack dev config, dev-server will serve static files in my build/public folder
var server = new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true
});

server.listen(3000, 'localhost', function(err, result) {
    if (err) {
        return console.log(err);
    } else {
        console.log("Listening at http://localhost:3000/");
    }
});
