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

// show & hide JS

let showhideinput = document.getElementById('showihideicon');
let icon = document.getElementById('icon');

icon.addEventListener('click', function(){
    if(showhideinput.type == 'password'){
        showhideinput.setAttribute('type', 'text');
        icon.classList.add('fa-eye-slash');
        icon.classList.remove('fa-eye');
        
        
    } else {
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
        showhideinput.setAttribute('type', 'password');
        
    }
});

// Email Validation JS

function emailValidation (){
    let emailform = document.getElementById('form-email-validation');
    let email= document.getElementById('email').value;
    let errortext=document.getElementById('email-validation');

    let emailSymbols = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(email.match(emailSymbols)){
        emailform.classList.add('valid');
        errortext.innerHTML = 'Your Mail is Valid';
        errortext.style.color = 'green';

    } else {
        emailform.classList.remove('valid');
        emailform.classList.add('invalid');
        errortext.innerHTML = 'Your Mail is Invalid';
        errortext.style.color = 'red';
    }

    if(email == ''){
        emailform.classList.remove ('valid');
        emailform.classList.add('invalid');
        errortext.innerHTML = 'enter your email';
    }
}

document.getElementById('registration').addEventListener('submit',function(event){
    event.preventDefault();
    let checkbox = document.getElementById('saveuser');
    if(checkbox.checked){
        let username =document.getElementById('username').value;
        Cookies.set('saveusername', username);
    } else {
        Cookies.remove('saveusername');
    }
})

let saveusersUsername = Cookies.get('saveusername');
if (saveusersUsername) {
    document.getElementById('username').value =saveusersUsername;
    document.getElementById('saveuser').checked = true; 
}