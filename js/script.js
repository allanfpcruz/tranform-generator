//declarações
const inputs = document.querySelectorAll('input')
const element = document.querySelector('#element')
const codeArea = document.querySelector('#code-area')
const copyButton = document.querySelector('#copy')

let dataList = []
let transformList = []
let i = 0

//funções

//classe
class Data {
  constructor(transform, value, measure) {
    this.transform = transform
    this.value = value
    this.measure = measure
  }
}

//cria o código de transformação
function generateTransform(value, transform, box) {  
  let code = ''
  
  let measure = setMeasure(transform)
  
  if(transformList.indexOf(transform) != -1) {
    dataList.forEach(data => {
      if(data.transform == transform) {
        data.value = value
        data.measure = measure
      }
    })
  } else {
    transformList[i] = transform
    dataList[i] = new Data(transform, value, measure)
    i++
  }
  

  dataList.forEach(data => {
    let partOfCode = `${data.transform}(${data.value}${data.measure}) `
    code += partOfCode
  })

  console.log(code)

  applyTransform(code)
  createCopy(code)

  let newMeasure = ''

  //coloca o número no índice
  if(measure == 'deg') {
    newMeasure = '°'
  } else {
    newMeasure = measure
  }
  box.innerHTML = value + newMeasure

}

// aplica o código no elemento
function applyTransform(code) {
 
  element.style.transform = code

}

//coloca o código pra copiar 
function createCopy(code) {
  codeArea.value = `transform: ${code.slice(0, code.lastIndexOf(';'))};`
}

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

//copia o código
function copyCode() {
  codeArea.select()
  document.execCommand('copy')
  alert('Code copied!')
}

//eventos
inputs.forEach(input => {
  input.addEventListener('input', (e) => {
    let transformType = input.getAttribute('name')
    let numBox = input.parentNode.querySelector('.control-num')
    generateTransform(input.value, transformType, numBox)
  })
})

copyButton.addEventListener('click', (e) => {
  copyCode()
}) 
