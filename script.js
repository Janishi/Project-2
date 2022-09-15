// burger bar

let burger = document.getElementById('toggle-wrapper');
let navigation = document.getElementById ('nav-id');

burger.addEventListener('click', function(){
    burger.classList.toggle('active-burger');
    navigation.classList.toggle('active');
});

let projects = document.getElementById('project');
let works=document.getElementById('work');
let prowin = document.getElementById('pro-win');
let workWindow = document.getElementById('work-win')

projects.addEventListener('click', function(){
    prowin.classList.toggle('pro-active');
    workWindow.classList.remove('work-active');
});


works.addEventListener('click', function(){
    workWindow.classList.toggle('work-active');
    prowin.classList.remove('pro-active');
});



// photo carusel




// form validations



