let formElement = document.getElementById('registration');

formElement.addEventListener('submit', function(y){
    y.preventDefault();
    
    let errors = {};

    let form = y.target;

    let username = document.getElementById('username').value;
    if (username.length <5 && username == ""){
        errors.username = 'Username value must be more then 5 charachters and can not be empty';
    }
    
    let password1 = document.getElementById('passw').value;
    let password2 = document.getElementById('passw2').value;

    if (password1 !=password2){
        errors.password2 = 'Passwords do not match';
    }

    let agree = document.getElementById('agree').checked;

    if (!agree) {
        errors.agree = 'you must agree our conditions'
    }

    form.querySelectorAll('[name="gender"]').forEach(item =>{
        if(item.checked){
            gender =true;
        }
    })

    if (!gender){
        errors.gender = 'Select your gender';
        
    }



    
 
});