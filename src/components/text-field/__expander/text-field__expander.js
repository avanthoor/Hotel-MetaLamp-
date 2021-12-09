const input = document.querySelector('.text-field_input-type_dropdown');
const expander = document.querySelector('.text-field__expander');

const dec = document.querySelectorAll('.text-field__expander-selector-btn_dec');
const inc = document.querySelectorAll('.text-field__expander-selector-btn_inc');
const value = document.querySelectorAll('.text-field__expander-value')

const cancel = document.querySelector('#cancel');
const apply = document.querySelector('#apply');

// Реализуем дропдаун
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

// Реализуем селекторы
expander.addEventListener('click', (e) => {
  let index;

  inc.forEach((el, i) => { 
    if (e.target === el) {
      index = i;
    }
  })

  dec.forEach((el, i) => { 
    if (e.target === el) {
      index = i;
    }
  })

  switch (e.target) {
    case inc[index]:
      value[index].textContent++;
      break;
    case dec[index]:
      if (value[index].textContent > 0) {
        value[index].textContent--;
      }
      break;

    case cancel:
      for (el of value) {
        el.textContent = 0;
      }
  }
})








