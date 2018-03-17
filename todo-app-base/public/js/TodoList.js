import $ from 'jquery';
import TodoItem from './TodoItem';

class TodoList {
	constructor(element, items = []) {
		this.element = element;
		this.items = items;
	}

	load() {
		// get all from API
		//const data;

		$.ajax({
			url: 'https://jsonplaceholder.typicode.com/todos',
			method: 'get'
		}).done((data) => {
			// create child TodoItems
			data.forEach((el, i) => {
				const item = new TodoItem(el.title);
				this.items.push(item);
			});

			console.log(this.items);
		});




		// render
	}
}

export default TodoList;
