p = document.getElementById("id");
function getUrl(){
    const n = 10;
    const characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var randomString = '';

    for (i = 0; i < n; i++) {
        var index = Math.random(0, (characters.length) - 1);
        randomString = characters[index];
    }
    console.log(randomString);
    p.innerText = randomString;
}

