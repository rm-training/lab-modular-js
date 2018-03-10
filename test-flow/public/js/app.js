require.config({
	// not required if i used a data-main attribute
	baseUrl: 'js',
	// additional modules that may not be in my baseUrl
	// or may not be defined 'with/path/names' in module name
    paths: {
        jquery: '//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min'
    }
});

require(['testfile2', 'jquery'], function(mod2, $) {

	// my main application that loads dependencies
	// and initializes the app
	mod2.init();

	$(function() {
		console.log('jQuery defined onload');
	});

	setTimeout(function() {
		require(['testfile'], function(mod1) {
			console.log('Asynchronously loaded mod1');
		});
	}, 5000);
});
