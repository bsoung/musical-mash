var webpack = require('webpack');
var path = require('path');
var Dotenv = require('dotenv-webpack');


module.exports = {
	entry: {
		app: './src/app.js'
	},
	output: {
		filename: 'public/build/bundle.js',
		sourceMapFilename: 'public/build/bundle.map'
	},
	devtool: '#sourcemap',
	plugins: process.env.NODE_ENV === 'production' ? [
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production'),
				'SC_CLIENT_ID': JSON.stringify(process.env.SC_CLIENT_ID)
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			minimize: true,
			compress: {
				warnings: true
			}
		})

	] : [
		new Dotenv({
      path: './.env', // Path to .env file (this is the default)
      safe: false // load .env.example (defaults to "false" which does not use dotenv-safe)
    })

	],
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules!bower_components)/,
				loader: 'babel-loader',
				exclude: path.resolve(__dirname, 'node_modules/'),
				query: {
					presets: ['react', 'es2015']
				}
			}
		]
	}
}




