var PasswordRange = document.getElementById('passwordRange');
var symbols = document.getElementById('symbols');
var numbers = document.getElementById('numbers');
var uppercase = document.getElementById('uppercase');
var lowercase = document.getElementById('lowercase');
var output = document.getElementById('passwordShow');

var isChecked = document.getElementsByName('password');
var Values = document.getElementsByClassName('values').value;
var characters = [];
for (var i=0; i<isChecked.length; i++) {
    if (isChecked[i].checked) {
        
        characters.push(Values[i].value);
        console.log(characters);
    }
}


function generatePassword(){
    n = PasswordRange.value;

    let password = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < n; i++ ) {
        password += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return password;
}
    console.log(index);
    output.value = generatePassword();


