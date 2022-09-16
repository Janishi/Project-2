let mainPostWrapper = document.getElementById('post-wrapper');
let overlay = document.getElementById('overlay');
let close = document.getElementById('overlay-close');
let content = document.getElementById('content'); 

function ajax (url, callback){

    let newRequest = new XMLHttpRequest();
    newRequest.open('GET', url);
    newRequest.addEventListener('load', function(){
        let data = JSON.parse(newRequest.responseText);
        callback(data);
        
    });

    newRequest.send();
}

ajax('https://jsonplaceholder.typicode.com/posts',function(data){
    PrintData(data);
});

function PrintData (data){
    data.forEach((element) => {
        createPosts(element);
    });
}

function createPosts (item){
    let divWrapper = document.createElement('div');
    divWrapper.classList.add('posts');


    let h3Tag = document.createElement('h3');
    h3Tag.innerText = item.id;

    let h2Tag = document.createElement('h2');
    h2Tag.innerText = item.title;

    let button = document.createElement('button');
    button.classList.add('overlay-button');
    button.innerText = 'Read more';
    button.setAttribute('data-id', item.id);
    

    divWrapper.appendChild(h3Tag);
    divWrapper.appendChild(h2Tag);
    divWrapper.appendChild(button);

    button.addEventListener('click', function(event){
        let id = event.target.getAttribute('data-id');
        openOverlay(id);
    });
    mainPostWrapper.appendChild(divWrapper);
    
}

function openOverlay(id){
    overlay.classList.add('active');
    let url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    ajax(url, function(data){
        overlayFunction(data);
    });
    
}

function overlayFunction (item){
    let description = document.createElement('p');
    description.innerText = item.body;
    description.classList.add('gotdata-body');
    content.appendChild(description);
}

close.addEventListener('click', function(){
    overlay.classList.remove('active');
    content.innerHTML = '';
});




