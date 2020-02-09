BASE_URL='https://www.thecolorapi.com/id?rgb='

const button = document.querySelector('#inputButton')
const InputR = document.querySelector('#inputR')
const InputG = document.querySelector('#inputG')
const InputB = document.querySelector('#inputB')
const OutputH = document.querySelector('#OutputH')
const BlockH = document.querySelector('#BlockH')
const wrongInput = document.querySelector('#wrongInput')

button.addEventListener('click', event =>{
    if((InputR.value=='' || InputG.value=='' || InputB.value=='')){
        console.log(InputR.value)
        console.log(InputG.value)
        console.log(InputB.value)
        console.log('a')
        wrongInput.innerHTML = 'The input value cannot be null.'
    }
    else if(Number(InputR.value) >= 256 || Number(InputG.value) >= 256 || Number(InputB.value) >= 256){
        console.log('b')
        wrongInput.innerHTML = 'The input value cannot be bigger than 256'
    }
    else if(Number(InputR.value) <= 0 || Number(InputG.value) <= 0 || Number(InputB.value) <= 0){
        console.log('c')
        wrongInput.innerHTML = 'The input value cannot be smaller than zero.'
    }
    else{
        wrongInput.innerHTML = ''
        console.log('d')
        axios.get(`${BASE_URL}${InputR.value},${InputG.value},${InputB.value}`).then(response =>{
            OutputH.value = response.data.hex.value
            BlockH.style = `background-color:${response.data.hex.value};`
        })
    }
    
})

