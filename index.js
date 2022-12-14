let cookie_btn = document.getElementById('cookie-btn');
let display_count = document.getElementById('display-count');
let count = 0;

cookie_btn.addEventListener('click', function (){
    cookie_btn.onclick = function(){
        count++;
    }
    display_count.innerHTML = count;
});


let change_small = document.getElementById ("smaller")
let change_big = document.getElementById("bigger")
let change_text = document.getElementById ("text")
change_small.addEventListener('click', function (){
    change_small.onclick = function(){
change_text.style.fontSize="smaller"
        console.log(change_small);
    }
})

change_big.addEventListener('click', function (){
    change_big.onclick = function(){
change_text.style.fontSize="larger"
        console.log(change_big);
    }
})
