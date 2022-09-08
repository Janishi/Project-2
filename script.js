// burger bar

let burger = document.getElementById('toggle-wrapper');
let navigation = document.getElementById ('nav-id');

burger.addEventListener('click', function(){
    burger.classList.toggle('active-burger');
    navigation.classList.toggle('active');
});