// burger bar

let burger = document.getElementById('burger-bar');
let navigation = document.getElementById ('nav-id');

burger=addEventListener('click', function(){

    navigation.classList.toggle('active');
});