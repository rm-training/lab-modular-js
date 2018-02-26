// set up all the menu behavior

const $menu = $('#main-menu');

$menu.on('click', 'a', function(e) {
	log('Clicked a menu item');

	e.preventDefault();
});
