let filter = document.getElementById('filter');
let result = document.getElementById('result');
let listItems = [];

function getUSers () {
    fetch('https://reqres.in/api/users?page=2', {
        method: 'GET',

    })
    .then(function(response){
        return response.json();

    })

    .then(function(responseData){
        responseData.data.forEach(element => {
            let li =document.createElement('li');
            li.textContent = `${element.first_name} ${element.last_name}`;
            listItems.push(li);
            result.appendChild(li);
        });
    })

    .catch(function(error){
        
    })

}

getUSers();

function filterData (searchItem){
    listItems.forEach( item =>{
        
        if(item.innerText.toLowerCase().includes(searchItem.toLowerCase())) {
            item.classList.remove('hide');

        }else {
            item.classList.add('hide'); 
        }
    });
}

filter.addEventListener('keydown', function(event){
    filterData(event.target.value);
});