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

    getId('osShare').onclick = function() {
        if (navigator.share) {
            navigator.share({
              title: 'WebShare API Demo',
              url: 'https://codepen.io/ayoisaiah/pen/YbNazJ'
            }).then(() => {
              console.log('Thanks for sharing!');
            })
            .catch(console.error);
          } else {
            console.log('cannot share');
          }
    };
    
    getId('fbShare').onclick = function() {
        location.href = "https://www.facebook.com/sharer/sharer.php?u=naver.com"
    }

    getId('bridgePrompt').style.background = 'linear-gradient(to bottom, '+colors[typ] + ', white)'

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
}