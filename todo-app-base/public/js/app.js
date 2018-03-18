/**
 * Create a To Do Application
 *
 * Build out a simple "to do" app using ES6+ JS and Modules
 *
 * Since you're using ES6 (and modules) you'll need to consider:
 * - How will I transpile (Babel?)
 * - How will I handle modules (Webpack?)
 * - How will I handle running tasks (Grunt?)
 * - Do I need to set up additional BUILD or DIST folders for compiled and built output?
 *
 * Tip: Don't worry about the final concatenated/uglified "build" step until
 * you have the app fully functional
 *
 * This app uses SemanticUI as it's front-end framework
 * You can view more documentation about styling here: https://semantic-ui.com/
 *
 * Consider what must be done:
 * - when a user submits a todo item, show it in the list and save it in the db
 * - a user can mark items as complete
 * - a user can remove items
 * - an item that is beyond the due date and not complete is "incomplete"
 *
 * Items should be saved in a database
 * - you can use json-server to simulate a local db
 * - or localStorage API
 * - or local-json-db, which is a db wrapper around localStorage
 * - or make AJAX requests directly to http://jsonplaceholder.typicode.com/todos
 * 	(However this last option is missing "due dates" entirely)
 *
 * You'll need to install some libraries, perhaps
 * - moment (momentjs) to help with date manipulation
 * - json-server or any database/api simulator
 * - http-server (already installed) for your local web server
 * - you can also use jquery, if you prefer, for front-end DOM interactions
 *
 * Make it "pretty" and usable
 * - add animations when a user removes an item, or marks it complete
 * - add success modals to the page after a user adds an item
 * 	-- such as modals https://semantic-ui.com/modules/modal.html
 * 	-- or messages https://semantic-ui.com/collections/message.html
 */

// when a user submits the form
// then add a new item to the list

// get all items from the "database"
// then populate the list

// when a user completes a task
// then change it's state to complete
// and update the database

// when a user removes a task
// then remove it from the view
// and update the database

// when a user does not complete a task by the due date
// display it as "incomplete"
