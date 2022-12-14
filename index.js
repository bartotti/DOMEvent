let cookie_btn = document.getElementById('cookie-btn');
let display_count = document.getElementById('display-count');
let count = 0;

cookie_btn.addEventListener('click', function (){
    cookie_btn.onclick = function(){
        count++;
    }
    display_count.innerHTML = count;
});