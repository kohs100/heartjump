function getid(id) { return document.getElementById(id);}

window.onload = function() {
    getid('getPrompt').onclick = function() {
        getid('promptAgree').style.display = 'block';
    }
    getid('promptAck').onclick = function() {
        getid('promptAgree').style.display = 'none';
    }
    getid('buttonNext').onclick = function() {
        if(getid('checkAgree').getAttribute('checked')) {
            location.href = '../main/index.html?age=' + 
            getid('agebox').selectedIndex;
        } else {
            location.href = '../main/index.html';
        }
    }
}