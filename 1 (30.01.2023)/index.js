const input_one = document.querySelector('.input-one');
const input_two = document.querySelector('.input-two');
const btn = document.querySelector('.btn');
let numb = document.querySelector('.numb');


btn.addEventListener("click", ()=> findSmaller(input_one.value, input_two.value));

const findSmaller = (a, b) => {
    if(a>b) {
        numb.innerHTML = b;
    }else if(a<b) {
        numb.innerHTML = a;
    }else {
        numb.innerHTML = 'Числа равны';
    }
}

//console.log(findSmaller(8, -8));