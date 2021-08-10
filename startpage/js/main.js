function getid(id) { return document.getElementById(id);}

const currentState = {
    isBridge: false,
    isChecked: false,
    age: 0
}

function renderNext() {
    var buttonNext = getid('buttonNext');
    if(currentState.isChecked && currentState.age != 0) {
        buttonNext.style.opacity = '100%';
    } else {
        buttonNext.style.opacity = '20%';
    }
}

window.onload = function() {
    var buttonNext = getid('buttonNext');
    var agebox = getid('agebox');
    var checkbox = getid('checkAgree');
    var agreebox = getid('boxAgree');

    var bridgePrompt = getid('bridgePrompt');

    getid('getPrompt').onclick = function() {
        getid('promptAgree').style.display = 'block';
    }
    getid('promptAck').onclick = function() {
        getid('promptAgree').style.display = 'none';
    }

    checkbox.onchange = function(e) {
        console.log('checkbox fired');
        currentState.isChecked = checkbox.checked;
        renderNext();
    }
    agebox.onchange = function(e) {
        console.log('agebox fired');
        var age = agebox.selectedIndex;
        if(age != 0) {
            currentState.age = age;
            renderNext();
        }
    }

    var startContent = function() {
        if(getid('checkAgree').checked) {
            
        } else {
            location.href = '../main/index.html';
        }
    }

    bridgePrompt.onclick = function() {
        location.href = '../main/index.html?age=' + currentState.age.toString();
    }

    buttonNext.addEventListener('click', function() {
        if(!currentState.isBridge && currentState.isChecked) {
            currentState.isBridge = true;

            var origin = getid('illust');
            var header = getid('header');

            header.classList.add('hidden');

            origin.classList.add('hidden');
            buttonNext.classList.add('hidden');
            agebox.classList.add('hidden');
            checkbox.classList.add('hidden');
            agreebox.classList.add('hidden');

            setTimeout(function() {
                header.innerHTML = '두근두근 나의 세종시장 첫날이 밝았다.<br>일 하러 가보자!'
                header.classList.remove('hidden');

                origin.style.display = 'none';
                buttonNext.style.display = 'none';
                agebox.style.display = 'none';
                checkbox.style.display = 'none';
                agreebox.style.display = 'none';
            }, 700);
            setTimeout(function() {
                bridgePrompt.style.display = 'block';
            }, 1400);
        }
    })

    renderNext();
}