//Добавление модификатора родительскому классу при клике по нему
let childClass = document.querySelector('.text-field_type_dropdown');

childClass.onclick = function() {
  childClass.classList.toggle('text-field_type_dropdown');
};

/*$(document).ready(function() {
  $('.text-field_type_dropdown').click(function () {
    $('#expander').toggle();
  })
})
*/

//Разбраться с модификаторами