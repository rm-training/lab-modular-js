import $ from 'jquery';

class TodoItem {
	constructor(description, due) {
		this.description = description;
		this.due = due;
	}

	save() {
		// submit to API
		const data = {
			title: this.description,
			due: this.due
		};
		$.ajax({
			url: 'https://jsonplaceholder.typicode.com/todos',
			data: data
		}).done(function(data) {

		});
	}
}

export default TodoItem;
