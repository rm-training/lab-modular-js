'use strict';

$(function () {
    console.log('Hello World');

    var $todoForm = $('#todo-form');
    var $todoItemList = $('#todo-items');

    // popover all the things
    $('[data-toggle="popover"]').popover();

    $todoForm.on('submit', function (e) {
        e.preventDefault();

        // create a new todo item in the list
        var isValid = false;
        var todoItem = {
            title: $todoForm.find('input[name=title]').val(),
            description: $todoForm.find('input[name=description]').val(),
            isUrgent: $todoForm.find('input[name="is-urgent"]').val()

            // validate
        };console.log('Validating');

        if (!todoItem.title) {
            isValid = false;
            $todoForm.find('input[name=title]').addClass('is-invalid').parent().append('<div class="invalid-feedback">Please give a title.</div>');
        }

        if (!todoItem.description) {
            isValid = false;
            $todoForm.find('input[name=description]').addClass('is-invalid').parent().append('<div class="invalid-feedback">Please give a description.</div>');
        }

        if (!isValid) {
            return;
        }

        console.log('Item about to be added:', todoItem);

        // add it into the markup

        $todoItemList.append('<li>' + todoItem.title + '</li>');

        // @todo save it to the database

        // clear the form
        $todoForm.trigger('reset');
    });
});
