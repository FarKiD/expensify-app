const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//const nodeExternals = require('webpack-node-externals');

module.exports = (env) => {
	const isProduction = env.production === true;
	
	return {
		entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader']
        }, {
            test: /\.s?css$/,
            use: [
							MiniCssExtractPlugin.loader,
							'css-loader',
							'sass-loader'
						]
        }]
    },
		plugins: [
			new MiniCssExtractPlugin({
				filename: 'styling.css'
			})
		],
    devtool: isProduction ? 'source-map' : 'eval-cheap-module-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
				historyApiFallback: true
    }
	};
};