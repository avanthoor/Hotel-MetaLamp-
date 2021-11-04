//jQuery-плагин для установки курсора в определенной позиции
$.fn.setCursorPosition = function(pos) {
    if ($(this).get(0).setSelectionRange) {
      $(this).get(0).setSelectionRange(pos, pos);
    } else if ($(this).get(0).createTextRange) {
      var range = $(this).get(0).createTextRange();
      range.collapse(true);
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
    }
  };

  //Добавляем маску с курсором в начале поля ввода
  $.mask.definitions['9'] = "[0-9]";
  $(".text-field_mask_on").click(function(){
    $(this).setCursorPosition(0);
  }).mask("99.99.9999");
 
