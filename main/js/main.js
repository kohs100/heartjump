function getId(id) { return document.getElementById(id);}
function getButton(id) { return getid('button' + id);  }

const sources = {
    bridge: {
        0: 'sources/bridge/0.jpg,',
        1: 'sources/bridge/1.jpg,',
        2: 'sources/bridge/2.jpg,',
        3: 'sources/bridge/3.jpg,',
        4: 'sources/bridge/4.jpg,',
        5: 'sources/bridge/5.jpg,',
        6: 'sources/bridge/6.jpg,',
    },
    select: {
        0: 'sources/select/0.jpg,',
        1: 'sources/select/1.jpg,',
        2: 'sources/select/2.jpg,',
        3: 'sources/select/3.jpg,',
        4: 'sources/select/4.jpg,',
        5: 'sources/select/5.jpg,',
        6: 'sources/select/6.jpg,',
    },
}

const currentState = {
    phase: 0,
    isBridge: true,
    answer: {
        1: null,
        2: null,
        3: null,
        4: null,
        5: null,
        6: null,
    }
};

function setSelect() {
    getId('illust').classList.add("move");
    getId('header').classList.add("move");
}

function unsetSelect() {
    getId('illust').classList.remove("move");
    getId('header').classList.remoev("move");
}

function renderPage() {
    if(isBridge) {
        getId('illust').src = sources.bridge[phase];
    } else {
        getId('illust').src = sources.select[phase];
    }
}

window.onload = function() {
    setSelect();
}