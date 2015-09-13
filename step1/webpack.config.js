var webpack = require("webpack"),
    path = require("path"),
    sourcePath = path.join(__dirname, "source"),
    distPath = path.join(__dirname, "dist");

module.exports = {
    entry: {
        app: path.resolve(sourcePath, "script", "app.js")
    },

    output: {
        path: path.resolve(distPath),
        filename: "bundle.js"
    },

    module: {
        loaders: []
    }
};