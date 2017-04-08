var webpack = require('webpack');
var path = require('path');

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
				'NODE_ENV': JSON.stringify('production')
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			minimize: true,
			compress: {
				warnings: true
			}
		})

	] : [],
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules!bower_components)/,
				loader: 'babel-loader',
				exclude: path.resolve(__dirname, 'node_modules/'),
				query: {
					presets: ['react', 'es2015', 'stage-0']
				}
			}
		]
	}
}




