// Q1
// console.log('Hello World');

// Q2
// window.alert('Hello World');

// Q3
// const $button = document.getElementById('js-button');
// $button.addEventListener('click', () => {
//     window.alert('clicked!');
// });

//Q4
// const $button = document.getElementById('js-button');
// let count = 0
// $button.addEventListener('click', () => {
//     window.alert(`clicked! + ${count++}`);
// });

//Q5
// const $button = document.getElementById('js-button');
// const $counter = document.getElementById('js-counter');
// let count = 1
// $button.addEventListener('click', () => {
//     $counter.innerHTML = count++;
// });

//Q6
// const array = ['cat', 'dog', 'fish'];
// console.log(array[2]);

//Q7
const array = ['cat', 'dog', 'fish'];
const $button = document.getElementById('js-button');
const $counter = document.getElementById('js-counter');
let count = 0;
$button.addEventListener('click', () => {
    console.log(`${array[count++]}`);
});