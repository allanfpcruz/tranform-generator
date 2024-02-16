//declarações
const inputs = document.querySelectorAll('input')

const element = document.querySelector('#element')
const codeArea = document.querySelector('#code-area')

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

  if(dataList.length > 0) {
    dataList.forEach(data => {
      if (data.transform == transform) {
        data.value = value
        data.measure = measure
      } else {
        dataList[i] = new Data(transform, value,measure)
      }
    })  
  } else {
    let data = new Data(transform, value, measure)
    dataList[i] = data
  }


  i++

  dataList.forEach(data => {
    let partOfCode = `${data.transform}(${value}${measure})`
    code += partOfCode
  })

  console.log(code)
  console.log(dataList)

  applyTransform(code)

  //coloca o número no índice
  box.innerHTML = value + measure

}

// aplica o código no elemento
function applyTransform(code) {
 
  element.style.transform = code

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
  })
})
