// const button = document.querySelector('.collapse-button');
// const container = document.querySelector('.collapse-container');

// button.addEventListener('click', () => {
//   container.classList.toggle('collapsed');
// });




const allButton = document.querySelectorAll('.collapse-button');
const allContainer = document.querySelectorAll('.collapse-container');

allButton.forEach(btn => {
    btn.addEventListener('click', () => {
        console.log(btn.children[1]);
        let arrow = btn.children[1];
        arrow.classList.toggle('rotate-arrow');
        console.log(btn.parentElement.children[1]);
        let container = btn.parentElement.children[1];
        container.classList.toggle('collapsed');
        // let arrow = 
        // allContainer[1].classList.toggle('collapsed');
    })
});


// allButton.addEventListener('click', () => {
//   container.classList.toggle('collapsed');
// });

let arrayTest = [1, 2, 58, 74, 31];

console.log(arrayTest.includes(74));
