//declarações
const inputs = document.querySelectorAll('input')

const element = document.querySelector('#element')
const codeArea = document.querySelector('#code-area')

//funções

//cria o código de tranformação
function generateTransform(value, transform, box) {

  let measure = setMeasure(transform)

  let code = `${transform}(${value}${measure})`
  console.log(code)

  applyTransform(code, transform)

  //coloca o número no índice
  box.innerHTML = value + measure

}

// aplica o código no elemento
function applyTransform(code, transform) {

  if (element.style.transform.length < code.length) {
    element.style.transform = code
  } else if (!element.style.transform.includes(transform)) {
    element.style.transform += code
  } else {

  }

}

//coloca o número do transform na interface


//define a unidade de medida
function setMeasure(transform) {

  let measure = ''
  if(transform.includes('translate')) {
    measure = 'px'
  } else if (transform.includes('rotate') || transform.includes('skew')) {
    measure = 'deg'
  } else {
    measure = ''
  }

  return measure

}

//esboço do código

//  if (!codeArea.value.includes(transform) || !codeArea.value.includes('none')) {
//    if (codeArea.value.includes(transform.slice(0, transform.length-2))) {
//      codeArea.value = `${codeArea.value.slice()}`
//    } else {
//      codeArea.value = `${codeArea.value.slice(0, codeArea.value.length - 1)}, ${code};`
//    }
//  } else {
//    codeArea.value = `transform: ${code};`
//  }

//eventos
inputs.forEach(input => {
  input.addEventListener('change', (e) => {
    let transformType = input.getAttribute('name')
    let numBox = input.parentNode.querySelector('.control-num')
    generateTransform(input.value, transformType, numBox)

    //teste
    let phrase = 'banana com granola'
    let word = 'com'
    let res = phrase.slice(0, phrase.lastIndexOf(word))
    console.log(res)  
  })
})
