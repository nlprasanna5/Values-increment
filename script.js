
let count = document.querySelector('h1');
let inc = document.querySelector('.inc');
let dec = document.querySelector('.dec');
let reset = document.querySelector('.reset');

inc.addEventListener("click", function() {
    count.innerText = Number(count.innerText)+1;
});

dec.addEventListener("click", function() {
    count.innerText = Number(count.innerText)-1;
});

reset.addEventListener("click", function() {
    count.innerText = 0;
})

