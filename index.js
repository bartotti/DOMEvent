let cookie_btn = document.getElementById('cookie-btn');
let display_count = document.getElementById('display-count');
let input_text = document.getElementById('text');
let text_btn = document.getElementById("text-btn");
let part3_div = document.getElementById("part3")
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

text_btn.addEventListener('click', function (){
    text_btn.onclick = function(){
        let get_color = document.getElementById('first_text').value;
        part3_div.style.backgroundColor = get_color;
    }

});

