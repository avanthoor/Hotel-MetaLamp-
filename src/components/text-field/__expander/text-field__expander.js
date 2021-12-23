const input = document.querySelector('.text-field_input-type_dropdown')
const expander = document.querySelector('.text-field__expander')

const dec = document.querySelectorAll('.text-field__expander-selector-btn_dec')
const inc = document.querySelectorAll('.text-field__expander-selector-btn_inc')
const value = document.querySelectorAll('.text-field__expander-value')

const controllers = document.querySelector('#controllers')
const clear = document.querySelector('#clear')
const apply = document.querySelector('#apply')

const inputGuests = document.querySelector('#guests')
const inputComfort = document.querySelector('#comfort')

// Реализуем дропдаун
document.addEventListener('click', (e) => {
  if ( (e.target.closest('.text-field_type_dropdown')) 
  && (!e.target.closest('.text-field__expander')) ) {
    expander.classList.toggle('text-field__expander_show')
    input.classList.toggle('text-field_input-type_dropdown_expanded')
  } else if ( (input.classList.contains('text-field_input-type_dropdown_expanded')) 
    && (!e.target.closest('.text-field__expander')) ) {
      expander.classList.remove('text-field__expander_show')
      input.classList.remove('text-field_input-type_dropdown_expanded')
  }
})

// Реализуем функцию устанавливки по умолчанию opacity для dec
const decDisabled = () => {
  for (let el of dec) {
    el.classList.add('text-field__expander-selector-btn_dec_disabled')
  }
}


const checkValue = (index, valueArr) => {
  if (+value[index].textContent > 0) {
    dec[index].classList.remove('text-field__expander-selector-btn_dec_disabled')
    if (controllers) {
      clear.style.visibility = 'visible'
    }
  } else if (+value[index].textContent === 0) {
    dec[index].classList.add('text-field__expander-selector-btn_dec_disabled')
    if (controllers) {
      let sumEl = 0

      for (let el of valueArr) {
        sumEl += +el
      }
      if (sumEl === 0) {
        clear.style.visibility = 'hidden'
      }
    }
  }
}

//Функция определения склонения слова
const numWord = (value, words) => {
  value = Math.abs(value) % 100
  let num = value % 10
  if (value > 10 && value < 20) return words[2]
  if (num > 1 && num < 5) return words[1];
	if (num == 1) return words[0]; 
	return words[2];
}

const withoutControllers = (values) => {
  inputComfort.value = `${values[0]} ${numWord(values[0], ['спальня', 'спальни', 'спален'])}` +
  ((values[1] > 0) ? `, ${values[1]} ${numWord(values[1], ['кровать', 'кровати', 'кроватей'])}` : ', 0 кроватей') +
  ((values[2] > 0) ? `, ${values[2]} ванн...` : ', 0 ванн...')
}

let currentValue = []

expander.addEventListener('click', (e) => {
  let index

  inc.forEach((el, i) => { 
    if (e.target === el) {
      index = i
    }
  })

  dec.forEach((el, i) => { 
    if (e.target === el) {
      index = i
    }
  })

  switch (e.target) {
    case inc[index]:
      value[index].textContent++
      currentValue[index] = value[index].textContent
      checkValue(index, currentValue)
      if (!controllers) {
        withoutControllers(currentValue)
      }
      break
    case dec[index]:
      if (value[index].textContent > 0) {
        value[index].textContent--
        currentValue[index] = value[index].textContent
        checkValue(index, currentValue)
        if (!controllers) {
          withoutControllers(currentValue)
        }
      } 
  }
})
 
decDisabled()


//Случай, если есть контроллеры
if (controllers) {

  clear.style.visibility = 'hidden'

  controllers.addEventListener('click', (e) => {

    if (e.target === clear) {
      for (el of value) {
        el.textContent = 0
      }
      decDisabled()
      inputGuests.value = `Сколько гостей`
      clear.style.visibility = 'hidden'
    }

    if (e.target === apply) {
      let sumItems = +value[0].textContent + +value[1].textContent

      inputGuests.value = `${sumItems} ${numWord(sumItems, ['гость', 'гостя', 'гостей'])}` +
      ((+value[2].textContent > 0) ? `, ${+value[2].textContent} ${numWord(+value[2].textContent, ['младенец', 'младенца', 'младенцев'])}` : '')
    }

  })
}



     
  