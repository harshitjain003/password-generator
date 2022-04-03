var PasswordRange = document.getElementById('passwordRange');
var symbols = document.getElementById('symbols');
var numbers = document.getElementById('numbers');
var uppercase = document.getElementById('uppercase');
var lowercase = document.getElementById('lowercase');
var output = document.getElementById('passwordShow');

if (localStorage.getItem("passwordrange")){
    var past= localStorage.getItem("passwordrange")
    PasswordRange.value = past ;

}


function generatePassword() {
    n = PasswordRange.value;

    // Seting the Select Password Range
    localStorage.setItem("passwordrange",n);
    var isChecked = document.getElementsByName('password');
    const characters = [];
    for (var i = 0; i < isChecked.length; i++) {
        if (isChecked[i].checked) {
            characters.push(isChecked[i].value);
        }
    }
    const stringChar = characters.toString();
    console.log(stringChar);
    let password = '';
    for ( let i = 0; i<n; i++ ) {
        password += stringChar.charAt(Math.floor(Math.random() * stringChar.length));
    }
    output.value = password;
    output.select();
    console.log(password);
    }

function copy(){
    navigator.clipboard.writeText(output.value);
}
    



    