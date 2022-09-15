let formElement = document.getElementById('registration');




formElement.addEventListener('submit', function(y) {
    y.preventDefault();
    
    let errors = {};

    let form = y.target;

    let username = document.getElementById('username').value;
    if (username.length < 5 && username == "") {
        errors.username = 'Username value must be more then 5 charachters and can not be empty';
    }
    
    let password1 = document.getElementById('passw').value;
    let password2 = document.getElementById('passw2').value;
    
    

    if (password1.length <5 && password1 == ""){
        errors.password = 'Password value must be more than 5 letter';
    }

    if (password1 != password2){
        errors.password2 = 'Passwords do not match';
    }

    let agree = document.getElementById('agree').checked;

    if (!agree) {
        errors.agree = 'you must agree our conditions';
    }

    let gender = false;

    form.querySelectorAll('[name="gender"]').forEach(item =>{
        if(item.checked){
            gender =true;
        }
    })

    if (!gender){
        errors.gender = 'Select your gender';
        
    }



    console.log(errors);

    form.querySelectorAll('.error-text').forEach(element =>{
        element.innerHTML = "";
    });

    for( let item in errors) {
        console.log(item);
        let textError = document.getElementById('error_'+ item);
        if (textError){
            textError.textContent = errors[item];
        }

    }

    if(Object.keys(errors).length == 0) {
        form.submit();
    }

 
});


let showhideinput = document.getElementById('showihideicon');
let icon = document.getElementById('icon');

icon.addEventListener('click', function(){
    if(showhideinput.type == 'password'){
        showhideinput.setAttribute('type', 'text');
        icon.classList.add('fa-eye-slash');
        
        
    } else {
        icon.classList.remove('fa-eye-slash');
        showhideinput.setAttribute('type', 'password');
    }
});