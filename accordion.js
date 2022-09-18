let container = document.querySelectorAll('.acc-container');

for (let item of container){
    item.addEventListener('click', function(){
        this.classList.toggle('active');
    })
}