const dropdown = document.querySelector('.text-field_type_dropdown');
const expander = document.querySelector('.text-field__dropdown-expander')
const input = document.querySelector('.text-field_input-type_dropdown')

document.addEventListener('click', (e) => {
  if ( (e.target.closest('.text-field_type_dropdown')) 
  && (!e.target.closest('.text-field__dropdown-expander')) ) {
    expander.classList.toggle('text-field__dropdown-expander_show');
    input.classList.toggle('text-field_input-type_dropdown_expanded');
  } else if ( (input.classList.contains('text-field_input-type_dropdown_expanded')) 
    && (!e.target.closest('.text-field__dropdown-expander')) ) {
      expander.classList.remove('text-field__dropdown-expander_show');
      input.classList.remove('text-field_input-type_dropdown_expanded');
  }
})