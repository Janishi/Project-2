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

let data = [

    {
        id:1,
        imageURL: 'https://play-lh.googleusercontent.com/85WnuKkqDY4gf6tndeL4_Ng5vgRk7PTfmpI4vHMIosyq6XQ7ZGDXNtYG2s0b09kJMw',
        title: 'HTML'
    },

    {
        id:2,
        imageURL: 'https://image.shutterstock.com/image-vector/javascript-programming-language-script-code-260nw-1062509657.jpg',
        title: 'Javascript'
    },

    {
        id:3,
        imageURL: 'https://miro.medium.com/max/1050/1*i3hzpSEiEEMTuWIYviYweQ.png',
        title: 'React'
    },

    {
        id:4,
        imageURL: 'https://pctechmag.com/wp-content/uploads/2015/03/angularjs.jpeg',
        title: 'Angular'
    }

    
]

let arrowLeft =document.getElementById('arrow-left');
let arrowRight = document.getElementById('arrow-right');
let sliderContent= document.getElementById('slider-content');

let sliderIndex = 0;

function  createDivtag(item){
    let tag = document.createElement('div');
    tag.classList.add('slide');

    return tag;

}

function  createImgtag(item){
    let tagImg = document.createElement('img');
    tagImg.setAttribute('src', item.imageURL);
    tagImg.setAttribute('alt', item.title);
    

    return tagImg;

}

function createH2Tag(item){
    let h2tag = document.createElement('h2');
    h2tag.textContent = item.title;
    h2tag.classList.add('slider-content');

    return h2tag;
    
}

function setSlide(){
    let slideItem = createDivtag(data[sliderIndex]);
    let H2tagfunction = createH2Tag(data[sliderIndex]);
    let imageTag = createImgtag(data[sliderIndex]);

    slideItem.appendChild(imageTag);
    slideItem.appendChild(H2tagfunction);
    sliderContent.appendChild(slideItem);


    console.log(slideItem);

}

setSlide();
