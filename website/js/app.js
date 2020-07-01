'use strict';

function renderThings(list) {
  const template = $('#thingsToDoTemplate').html();
  const container = $('#things');
  list.forEach(item => {
    let newItemHTML = Mustache.render(template, item)
    container.append(newItemHTML);
  });
}

function showThingsToDo() {

  $.ajax('http://localhost:3000/todo')
  .then(potato => {
    console.log(potato);
    renderThings(potato);
  })

}

$(document).ready(function () {
  showThingsToDo();
});
