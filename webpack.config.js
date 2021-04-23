const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin') //yarn add html-webpack-plugin -D
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
//yarn add -D @pmmmwh/react-refresh-webpack-plugin react-refresh
//para que não fique zerando tudo ao reiniciar o app

const isDevelopment = process.env.NODE_ENV !== 'production'
//yarn add cross-env -D // to create const on windows, mac and linux
//NODE_ENV=production yarn webpack //type on terminal to create new const

module.exports = {
    mode: isDevelopment ? 'development' : 'production',
    devtool: isDevelopment ? 'eval-source-map' : 'source-map',
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"] //".ts", ".tsx", 
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        hot: true
    },
    plugins: [
        isDevelopment && new ReactRefreshWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        })
    ].filter(Boolean), 
    module: {
        rules: [
            {
                test: /\.(j|t)sx$/, // \.jsx to check extension format
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader', //yarn add babel-loader -D 
                    options: {
                        plugins: [
                            isDevelopment && require.resolve('react-refresh/babel')
                        ].filter(Boolean)
                    }
                } 
            },
            {
                test: /\.scss$/, // \.css to check extension format
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader'] 
                //yarn add style-loader css-loader -D
                //yarn add node-sass -D
                //yarn add sass-loader -D
            }
        ],
    }
}

