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

  let things = [
    { task: 'watch tv' },
    { task: 'take a nap' },
  ];

  renderThings(things);

}

//this is dumb

$(document).ready(function () {
  showThingsToDo();
});
