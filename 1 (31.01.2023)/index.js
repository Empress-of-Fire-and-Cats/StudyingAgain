let inputOne = document.querySelector('.input-one');
let inputTwo = document.querySelector('.input-two');
const btnOne = document.querySelector('.btn-one');
const btnTwo = document.querySelector('.btn-two');
const title = document.querySelector('.title');
let numb = document.querySelector('.numb');


btnOne.addEventListener("click", ()=> findSmaller(inputOne.value, inputTwo.value));

btnTwo.addEventListener("click", ()=> clean());

const findSmaller = (numbOne, numbTwo) => {
    if(numbOne > numbTwo) {
        numb.innerHTML = numbTwo;
    }else if(numbOne < numbTwo) {
        numb.innerHTML = numbOne;
    }else {
        numb.innerHTML = 'Числа равны';
    }
}

const clean = () => {
    inputOne.value = '';
    inputTwo.value = '';
    numb.innerHTML = '';
}

if(typeof inputOne.value === 'number') {
    numb.innerHTML = 'на число -- сработало!!!!!';
    inputOne.value = '';
}

// if(typeof title.innerHTML == 'string') {
//     numb.innerHTML = 'на строку -- сработало!!!!!';
// }

console.log(inputOne.value);