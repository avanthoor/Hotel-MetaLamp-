const dropdown = document.querySelector('.text-field_type_dropdown');
const expander = document.querySelector('.text-field__expander')
const input = document.querySelector('.text-field_input-type_dropdown')

document.addEventListener('click', (e) => {
  if ( (e.target.closest('.text-field_type_dropdown')) 
  && (!e.target.closest('.text-field__expander')) ) {
    expander.classList.toggle('text-field__expander_show');
    input.classList.toggle('text-field_input-type_dropdown_expanded');
  } else if ( (input.classList.contains('text-field_input-type_dropdown_expanded')) 
    && (!e.target.closest('.text-field__expander')) ) {
      expander.classList.remove('text-field__expander_show');
      input.classList.remove('text-field_input-type_dropdown_expanded');
  }
})