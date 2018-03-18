var rootId = 1;
const status = null;
var user = {
	id: 1,
	name: 'User Name'
};

function checkUser() {
	if (user.id == rootId) {
		let status = 'root';
		console.log('User is root');
	}
	return status;
}

checkUser();
