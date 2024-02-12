//declarações
const inputs = document.querySelectorAll('input')

const element = document.querySelector('#element')
const codeArea = document.querySelector('#code-area')

//funções
function generateTransform(value, transform) {
  let measure = ''

  if(transform.includes('translate')) {
    measure = 'px'
  } else if (transform.includes('rotate')) {
    measure = '°'
  } else {
    measure = ''
  }

  let code = `${transform}(${value}${measure})`
  console.log(code)

  if (!codeArea.value.includes(transform) || !codeArea.value.includes('none')) {
    if (codeArea.value.includes(transform.slice(0, transform.length-2))) {

    } else {
      codeArea.value = `${codeArea.value.slice(0, codeArea.value.length - 1)}, ${code};`
    }
  } else {
    codeArea.value = `transform: ${code};`
  }
}

//eventos
inputs.forEach(input => {
  input.addEventListener('change', (e) => {
    let transformType = input.getAttribute('name')
    generateTransform(input.value, transformType)
  })
})
