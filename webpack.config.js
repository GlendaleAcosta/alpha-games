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
            Nav: "app/src/components/Layout/Nav.jsx",
            Home: "app/src/components/Pages/Home.jsx",
            HomeHeader: "app/src/components/HomeHeader.jsx",
            GameGrid: "app/src/components/GameGrid.jsx",
            Footer: "app/src/components/Layout/Footer.jsx",
            LoginModal: "app/src/components/Modals/LoginModal.jsx",
            Login: "app/src/api/Login.jsx",
            SignUpModal: "app/src/components/Modals/SignUpModal.jsx",
            SignUp: "app/src/api/SignUp.jsx",
            ProfilePage: "app/src/components/Pages/ProfilePage.jsx"
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

