var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {

    entry: "./app/src/app.jsx",
    output: {
        path: __dirname,
        filename: './app/public/bundle.js'
    },
    plugins: [
        new CleanWebpackPlugin(['./app/public/bundle.js'], {
            root: __dirname,
            verbose: true,
            dry: false
        })
    ],
    resolve: {
        root: __dirname,
        alias: {
            Main: "app/src/components/Main.jsx",
            Nav: "app/src/components/Nav.jsx",
            Home: "app/src/components/Home.jsx",
            HomeHeader: "app/src/components/HomeHeader.jsx",
            GameGrid: "app/src/components/GameGrid.jsx",
            Footer: "app/src/components/Footer.jsx",
            LoginModal: "app/src/components/LoginModal.jsx",
            SignUpModal: "app/src/components/SignUpModal.jsx",
            SignUp: "app/src/actions/SignUp.jsx"
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
            },
            {
                test: /\.scss$/,
                loaders: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    }

}

