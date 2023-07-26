// Wait for the DOM to be loaded
document.addEventListener('DOMContentLoaded', function () {
    // Get necessary DOM elements
    const todoInput = document.getElementById('todoInput');
    const addButton = document.getElementById('addButton');
    const todoList = document.getElementById('todoList');
  
    // Function to add a new to-do item
    function addTodo() {
      const todoText = todoInput.value.trim();
  
      if (todoText === '') {
        alert('Please enter a valid to-do item.');
        return;
      }
  
      // Create a new list item
      const listItem = document.createElement('li');
  
      // Create a checkbox and set its type to "checkbox"
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
  
      // Create a text node for the to-do item
      const textNode = document.createTextNode(todoText);
  
      // Create a delete button
      const deleteButton = document.createElement('button');
      deleteButton.innerHTML = 'Delete';
  
      // Add event listener to the delete button
      deleteButton.addEventListener('click', function () {
        listItem.remove();
      });
  
      // Append the checkbox, text, and delete button to the list item
      listItem.appendChild(checkbox);
      listItem.appendChild(textNode);
      listItem.appendChild(deleteButton);
  
      // Append the list item to the todoList
      todoList.appendChild(listItem);
  
      // Clear the input field
      todoInput.value = '';
    }
  
    // Add event listener to the addButton
    addButton.addEventListener('click', addTodo);
  
    // Function to handle checkbox change
    function handleCheckboxChange(event) {
      const listItem = event.target.parentElement;
  
      // If the checkbox is checked, add the "checked" class and move the item to the bottom of the list
      if (event.target.checked) {
        listItem.classList.add('checked');
        todoList.appendChild(listItem);
      } else {
        listItem.classList.remove('checked');
      }
    }
  
    // Add event listener to each checkbox
    todoList.addEventListener('change', handleCheckboxChange);
  });
  