const inputName = document.querySelector ('.inputName')
const inputDate = document.querySelector ('.inputDate')
const button = document.querySelector ('.button')
const PlaceForError1 = document.querySelector('.error_1')
const PlaceForError2 = document.querySelector('.error_2')
const form = document.querySelector('.form')
const answer = document.querySelector('.answer')


form.addEventListener('submit', function(event){
    event.preventDefault()
    let bullFunction_one
    if (inputName.value == ''){
        PlaceForError1.innerHTML = `
        <h3 class="error">
          Введите имя
        </h3>`
        bullFunction_one = false
    }else{
        PlaceForError1.innerHTML = ''
        bullFunction_one = true
    } 
    
    if (inputDate.value == ''){
        PlaceForError2.innerHTML = `
        <h3 class="error">
          Введите дату рождения
        </h3>`
        bullFunction_one = false
    }else{
        PlaceForError2.innerHTML = ''
        bullFunction_one = true
    }


    if(bullFunction_one = true && bullFunction_two == true){
        let difference = 2023 - Number(inputDate.value)
        if (difference < 18){
            answer.innerHTML = `
            <h3 class="answer">Вам меньше 18 лет</h3>
            `
        }else{
            answer.innerHTML = `
            <h3 class="answer">Вам больше 18 лет, держите -<a href="https://club.z-go.ru/?do=exit" class="link-answer">ссылку</a></h3>
            `
        }
    }
    
})
let bullFunction_two
document.addEventListener ('keyup', function(){
    
    if (inputName.value != ''){
        if(inputName.value.length <= 1){
            PlaceForError1.innerHTML = `
            <h3 class="error">Надо минимум 2 символа</h3>
            `
            inputName.style.boxShadow= '0 0 6px 6px red'
            bullFunction_two = false
        }else{
            PlaceForError1.innerHTML = ''
            inputName.style.boxShadow= '0 0 6px 6px green'
            bullFunction_two = true
        }
    }
    if (inputDate.value != ''){
        if(inputDate.value.length <= 3){
            PlaceForError2.innerHTML = `
            <h3 class="error">Введи 4-х значное число</h3>
            `
            inputDate.style.boxShadow= '0 0 6px 6px red'
            bullFunction_two= false
        }else{
            PlaceForError2.innerHTML = ''
            inputDate.style.boxShadow= '0 0 6px 6px green'
            bullFunction_two = true 
        }
    }
})
