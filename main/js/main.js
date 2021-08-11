function getId(id) { return document.getElementById(id); }
function getButton(id) { return getId('button' + id); }

const objects = {
    illust: null,
    header: null,
    container: null,
    bridge: null
}

const sources = {
    bridge: {
        0: 'sources/bridge/0.jpg',
        1: 'sources/bridge/1.jpg',
        2: 'sources/bridge/2.jpg',
        3: 'sources/bridge/3.jpg',
        4: 'sources/bridge/4.jpg',
        5: 'sources/bridge/5.jpg',
        6: 'sources/bridge/6.jpg',
    },
    select: {
        0: 'sources/select/0.jpg',
        1: 'sources/select/1.jpg',
        2: 'sources/select/2.jpg',
        3: 'sources/select/3.jpg',
        4: 'sources/select/4.jpg',
        5: 'sources/select/5.jpg',
        6: 'sources/select/6.jpg',
    },
}

const fontdefault = {
    header: '40pt',
    sels: '30pt'
}
const fontoverride = {
    bridge: {
        5: '38pt'
    },
    select: {
        0: {
            sels: {}
        },
        1: {
            sels: {}
        },
        2: {
            sels: {
                1: '28pt',
                2: '29pt'
            }
        },
        3: {
            sels: {}
        },
        4: {
            sels: {
                1: '29pt',
                2: '27pt',
                3: '28pt',
            }
        },
        5: {
            header: '38pt',
            sels: {}
        },
        6: {
            sels: {
                0: '27pt',
                1: '28pt',
                2: '28pt',
                3: '23pt',
                4: '26pt'
            }
        }
    }
}

const scripts = {
    bridge: {
        0: '첫 번째 일정은 세종시 주요 업무<br>경과를 들으시는 자리 입니다.',
        1: '다음 일정은 세종시 청년들을<br>만나는 자리입니다.',
        2: '청년들과 함께 만찬회 이동이십니다.',
        3: '잠시 쉬시고 오후에<br>기자회견 있으실 예정입니다.',
        4: '눈코 뜰 새 없이 바쁘군... 오후 일과<br>시작 전에 화장실 좀 다녀와야겠어.',
        5: '시청 앞 광장에서 농성이 진행 중입니다.<br>다른 길로 가실까요?',
        6: '오늘 마지막 일정인 기자회견<br>장소에 도착했습니다.',
    },
    select: {
        0: {
            header: '훗... 떨리는군. 첫 국장브리핑!<br>가장 듣기 좋았던 보고는?',
            sels: {
                0: '직업군이 다양해지고 있다고 합니다.',
                1: '주거 환경이 깨끗하다고 합니다.',
                2: '청년 미래교육이 전국제일이랍니다.',
                3: '청년 맞춤 복지가 좋다고 합니다.',
                4: '청년들이 정책에 대한 관심이 많다고 합니다.',
            }
        },
        1: {
            header: '청년간담회가 첫 업무구나.<br>흠... 이 중에서 가장 중요한 건?',
            sels: {
                0: '취업의 문이 다양했으면 좋겠습니다.',
                1: '집값에 대한 부담을 줄이고 싶습니다.',
                2: '평등한 환경에서 공부하고 싶어요.',
                3: '청년들이 즐길 거리가 부족합니다.',
                4: '청년의 목소리에 귀 기울여주세요.',
            }
        },
        2: {
            header: '프로는 식사자리에서도 놓치지 않지!<br>귀 담아 들어야 할 의견은?',
            sels: {
                0: '제가 좋은 사업아이템이 있습니다.',
                1: '요즘 집을 구하고있는데 월세는 너무 부담돼요.',
                2: '고등학교, 대학교에서 배운게 쓸 곳이 없어요.',
                3: '휴일에 할 게 없어요.',
                4: '저희에게 필요한 정책이 없어요.',
            }
        },
        3: {
            header: '쉬는 시간에는 SNS가 재밌지!<br>가장 마음에 드는 피드는?',
            sels: {
                0: '#퇴근#칼퇴#워라벨#욜로',
                1: '#내집마련#내돈내산#우리집#2PM',
                2: '#대졸#고졸#취업#자기개발',
                3: '#건강검진#건강#운동#다이어트',
                4: '#살기좋은도시#위촉장#위원회',
            }
        },
        4: {
            header: '역시 화장실은 정보통이야.<br>귀 기울여야 하는 내용은?',
            sels: {
                0: '어차피 계약직인데 뭐 인건비 줘봤자 에휴',
                1: '선심 쓰는 척 아무도 안 가는 집이나 세우잖아',
                2: '청년 맞춤형 평생교육은 무슨.. 배울만한 게 없어',
                3: '복지, 문화라더니 죄다 상담 프로그램들이더라',
                4: '청년을 너무 명분으로만 쓰는데?',
            }
        },
        5: {
            header: '아니야, 이거야말로 시장의 일이야.<br>저건 나도 문제라고 생각했지!',
            sels: {
                0: '짤릴 걱정 NO 청년일자리 UP',
                1: 'LH로남불주택정책 청년들은 죽어간다',
                2: '스마트한 교육? 실상은 Stupid ',
                3: '사각지대 없는 세종! 모든 청년 지원하라',
                4: '우문현답! 우리의 문제는 현장에 답이 있다!',
            }
        },
        6: {
            header: '마이크 테스트 아아,<br>가장 먼저 대답할 질문은?',
            sels: {
                0: '월간일자리 "취업률 전국 뒤에서 2등 해결책은?"',
                1: '주거일보 "치솓는 세종집값 해결 방법은 없나"',
                2: '교육타임즈"세종시 대학생 유출 심각...원인은?"',
                3: '복지문화TV"세종 불평등 문화격차... 문화시설 부족 원인"',
                4: '참여권리신문"의견 반영 안 되는 청년분과?"',
            }
        },
    }
}

const currentState = {
    phase: 0,
    isBridge: true,
    answer: {
        0: 0,
        1: 0,
        2: 0,
        3: 0,
        4: 0
    },
    transitioning: true,
    age: null
};

function loadImage(callback) {
    var illust = objects.illust
    illust.onload = callback
    if (currentState.isBridge) {
        illust.src = sources.bridge[currentState.phase]
    } else {
        illust.src = sources.select[currentState.phase]
    }
    illust.style.display = 'block';
}

function loadSelection() {
    var now = fontoverride.select[currentState.phase].sels;
    for (var i = 0; i < 5; i++) {
        var button = getButton(i);
        if (i in now) {
            button.style.fontSize = now[i];
        } else {
            button.style.fontSize = fontdefault.sels;
        }
        button.innerHTML = scripts.select[currentState.phase].sels[i];
    }
}

function loadHeader() {
    objects.header.classList.add('hidden')
    objects.header.style.display = 'block';

    setTimeout(function () {
        if (currentState.isBridge) {
            if(currentState.phase in fontoverride.bridge) {
                objects.header.style.fontSize = fontoverride.select[currentState.phase].header;
            } else {
                objects.header.style.fontSize = fontdefault.header;
            }
            objects.header.innerHTML = scripts.bridge[currentState.phase]
        } else {
            if('header' in fontoverride.select[currentState.phase]) {
                objects.header.style.fontSize = fontoverride.select[currentState.phase].header;
            } else {
                objects.header.style.fontSize = fontdefault.header;
            }
            objects.header.innerHTML = scripts.select[currentState.phase].header
        }
        objects.header.classList.remove('hidden')
    }, 800)
}

function setSelect(callback) {
    objects.illust.classList.add("move");
    objects.header.classList.add("move");
    loadHeader();

    objects.bridge.style.display = 'none';

    objects.container.style.display = 'block'
    setTimeout(function () {
        loadSelection();
        loadImage();
        objects.container.classList.remove('hidden');

        setTimeout(callback, 800);
    }, 800);
}

function unsetSelect(callback) {
    objects.container.classList.add('hidden');
    setTimeout(function () {
        objects.illust.classList.remove("move");
        objects.header.classList.remove("move");
        loadHeader();
        objects.container.style.display = 'none';
        setTimeout(function () {
            loadImage(function () {
                objects.bridge.style.display = 'block';
                this.onload = () => null;
            });
            callback();
        }, 800);
    }, 800);
}

function renderPage() {
    currentState.transitioning = true;
    var release = function () {
        currentState.transitioning = false;
    }
    if (currentState.isBridge) {
        unsetSelect(release);
    } else {
        setSelect(release);
    }
}

function choice(array) {
    var index = Math.floor(Math.random() * array.length)
    return array[index]
}

function testEnd() {
    currentState.transitioning = true;
    var max = 1;
    var maxs = [];

    for (let i = 0; i < 5; i++) {
        if (currentState.answer[i] > max) {
            max = currentState.answer[i];
            maxs = [i];
        } else if (currentState.answer[i] == max) {
            maxs.push(i);
        }
    }

    location.href = '../endpage/index.html?typ=' + choice(maxs).toString()
}

window.onload = function () {
    objects.illust = getId('illust');
    objects.header = getId('header');
    objects.container = getId('buttonContainer');
    objects.bridge = getId('bridgePrompt');

    objects.bridge.onclick = function () {
        if (!currentState.transitioning) {
            currentState.isBridge = false;
            renderPage();
        }
    }

    const URLSearch = new URLSearchParams(location.search);
    if(URLSearch.has('age')) {
        currentState.age = URLSearch.get('age');
        console.log('current age: ' + currentState.age);
    }

    for (let i = 0; i < 5; i++) {
        getButton(i).addEventListener('click', function () {
            if (!currentState.transitioning) {
                if (currentState.phase == 6) {
                    testEnd();
                    // do not return
                }
                currentState.isBridge = true;
                currentState.phase += 1;
                currentState.answer[i] += 1;
                renderPage();
            }
        })
    }

    renderPage();
}