const inputOne = document.querySelector('.input-one');
const inputTwo = document.querySelector('.input-two');
const btnOne = document.querySelector('.btn-one');
const btnTwo = document.querySelector('.btn-two');
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
