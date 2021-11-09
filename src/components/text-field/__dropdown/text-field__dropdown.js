//Добавление модификатора родительскому классу при клике по нему
let parentClass = document.querySelector('.text-field_type_dropdown');
let childClass = document.querySelector('.text-field_input-type_dropdown');
let expander = document.querySelector('.text-field__dropdown-expander');
parentClass.onclick = function() {
  childClass.classList.toggle('text-field_input-type_dropdown_expanded');

};

$(document).ready(function() {
  $(parentClass).on('click', function () {
    $(expander).show()
  })
})


