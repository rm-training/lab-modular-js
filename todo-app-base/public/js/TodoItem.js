import $ from 'jquery';

class TodoItem {
	constructor(description, due, isComplete = false) {
		this.description = description;
		this.due = due;
		this.isComplete = isComplete;
	}

	save() {
		const data = {
			title: this.description,
			due: this.due
		};

		$.ajax({
			url: 'https://jsonplaceholder.typicode.com/todos',
			data: data,
			method: 'POST'
		}).done(function(response) {
			console.log("Done submitting a ToDo Item", response);
		});
	}
}

export default TodoItem;
