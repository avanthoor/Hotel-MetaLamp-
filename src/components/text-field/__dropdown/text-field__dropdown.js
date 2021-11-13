$(document).ready(function() {
  let parentClass = $('.text-field_type_dropdown');
  let childClass = $('.text-field_input-type_dropdown');
  let expander = $('.text-field__dropdown-expander');

  $(parentClass).click(function () {
    $(childClass).toggleClass('text-field_input-type_dropdown_expanded'); //Добавляет/убирает класс при клике
    $(expander).show(); //показывает expander при клике
  })
  
  $(document).mouseup(function (e) {
    if (!expander.is(e.target) //если клик был не по expander
      && expander.has(e.target).length == 0) { //и не по его дочерним элм
        expander.hide ();
      }
  })
  
})


