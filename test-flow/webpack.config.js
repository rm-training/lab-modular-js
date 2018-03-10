const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
	mode: 'development',
	entry: './public/js/app.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'generated/js')
	},
	plugins: [
	 new UglifyJsPlugin({
	 	sourceMap: true
	 })
	],
	module: {
	  rules: [
	    {
	      test: /\.js$/,
	      exclude: /(node_modules|bower_components)/,
	      use: {
	        loader: 'babel-loader',
	        options: {
	          presets: ['env'],
	          babelrc: true // this is default
	        }
	      }
	    }
	  ]
	},
	devtool: 'inline-source-map'
};
