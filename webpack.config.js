var webpack = require('webpack');

module.exports = {

    entry: "./app/src/app.jsx",
    output: {
        path: __dirname,
        filename: './app/public/bundle.js'
    },
    resolve: {
        root: __dirname,
        alias: {
            Main: "app/src/components/Main.jsx",
            Nav: "app/src/components/Nav.jsx",
            Home: "app/src/components/Home.jsx"
        },
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }
        ]
    }

}

