const path = require('path');

module.exports = {
	mode: 'development',
	devtool: 'cheap-eval-source-map',
	entry: './public/scripts/app.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'generated/scripts')
	},
	module: { // config for all modules
		rules: [{
			test: /\.js$/, // which files do I affect
			loader: 'babel-loader', // and which loader do I put them through
			query: { // params to my loader
				presets: ['env']
			}
		}]
	}
};
