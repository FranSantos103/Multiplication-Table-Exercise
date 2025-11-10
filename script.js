let numberElement = document.getElementById('number')
let button = document.getElementById('button')
let result = document.getElementById('resultOutput')

button.addEventListener('click', showMultiplicationTable)

function showMultiplicationTable(){
    if (numberElement.value === ""){
        alert('Please type a number')
        return
    }
    let numberValue = Number(numberElement.value  )
    result.innerHTML = ""
    for (let i = 0; i <=10; i = i + 1){
        result.style.display = 'inline-block'
        result.innerHTML = result.innerHTML + `${numberValue} x ${i} = ${numberValue * i} <br>`
    }
}