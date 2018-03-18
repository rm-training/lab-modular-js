import $ from 'jquery';
import TodoItem from './TodoItem';

const renderLimit = 20;

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

			console.log(
				"Got this data",
				 data,
				 "Loaded these items",
				 this.items
			 );

			this.render();
		});
	}

	render() {
		let count = 0;
		this.items.every((el) => {
			if (count > renderLimit) {
				return false; // breaks an every()
			} else {
				count++;
			}

			$(this.element).append(
				`<div class="item ${el.isComplete ? 'complete-item' : 'incomplete-item'}">
	              <i class="square outline icon"></i>
	              <div class="content">
	                <div class="header">
	                  ${el.description}
	                  <a class="delete-item" href="#" title="Remove item">
	                    <i class="ui red icon cancel circle"></i>
	                  </a>
	                </div>
	                <div class="description"></div>
	              </div>
	            </div>`
			);

			return true;
		});
	}
}

export default TodoList;
