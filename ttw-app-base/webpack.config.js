const path = require('path');

module.exports = {
	mode: 'development',
	devtool: 'cheap-eval-source-map',
	entry: './public/scripts/app.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'generated/scripts')
	}
};
