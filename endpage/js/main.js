function getId(id) { return document.getElementById(id);}
function getButton(id) { return getId('button' + id);  }

const colors = {
    0: '#50BCDF',
    1: '#ff7f00',
    2: '#ee6666',
    3: '#66ee66',
    4: '#8b66ff'
}

window.onload = function() {
    const URLSearch = new URLSearchParams(location.search);
    typ = URLSearch.get('typ');
    Kakao.init('32c3e18ad023a195dafd427c59f0503d');

    getId('osShare').onclick = function() {
        if (navigator.share) {
            navigator.share({
              title: '내가 만약 세종시장이 된다면?!',
              url: 'https://내가만약세종시장이라면.com'
            }).then(() => {
              console.log('Shared');
            })
            .catch(console.error);
          } else {
            console.log('cannot share');
          }
    };
    
    getId('fbShare').onclick = function() {
        location.href = "https://www.facebook.com/sharer/sharer.php?u=내가만약세종시장이된다면.com/typ"+typ+".html"
    }

    getId('kakaoShare').onclick = function() {
      Kakao.Link.sendCustom({
        templateId: 58964,
        templateArgs: {
          'THU': 'https://내가만약세종시장이라면.com/common/sources/typ'+typ+'.jpg'
        }
      });
    }

    var bridge = getId('bridgePrompt');
    bridge.style.background = 'linear-gradient(to bottom, '+colors[typ] + ', white)';
    bridge.onclick = function() {
      window.scrollTo({
        top: bridge.offsetTop,
        left: 0,
        behavior: 'smooth'
      });
    }

    var image_req = new XMLHttpRequest();
    image_req.open('GET', 'sources/typ' + typ + '.jpg');
    image_req.responseType = 'blob';
    image_req.onload = function() {
        if (image_req.status === 200) {
            getId('illust').src = URL.createObjectURL(image_req.response);
            getId('loadingContainer').style.display = 'none';
        }
    };
    image_req.send();

    getId('buttonSearch').onclick = function() {
      location.href = '//www.youthcenter.go.kr/main.do';
    }
    getId('buttonCenter').onclick = function() {
      location.href = '//sjnarae.or.kr/index.php';
    }
    getId('buttonInfo').onclick = function() {
      location.href = '//blog.naver.com/sjyouthnet';
    }
    getId('buttonKakao').onclick = function() {
      location.href = '//open.kakao.com/o/gDMqyjS';
    }
}