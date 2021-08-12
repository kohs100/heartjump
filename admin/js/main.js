const endPoint = "https://backend.xn--o39a52g32gwpcbya401a9zc17go7e8nan3f.com/admin"

function getDB(apiKey, success, failed) {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', endPoint, true);
    xhr.setRequestHeader('x-api-key', apiKey);
    xhr.responseType = 'json';

    xhr.onerror = function() { failed("Authentication Failed"); }
    xhr.onload = function(e) {
        if(e.target.status === 200)
            success(e.target.response);
        else
            failed(e.target.status);
    };
    xhr.send();
}

ages = {
    1: "10~19",
    2: "20~24",
    3: "25~29",
    4: "30~34",
    5: "35~",
}

typs = {
    0: "워라벨홀릭 시장님",
    1: "집콕 지킴이 시장님",
    2: "마음만은 새내기 시장님",
    3: "같이가치 그리는 시장님",
    4: "열정대장 시장님"
}

window.onload = function () {
    var result = document.getElementById('result');
    const URLSearch = new URLSearchParams(location.search);
    if(URLSearch.has('key')) {
        
        getDB(URLSearch.get('key'), function(resp) {
            var csv = "\ufefftimestamp,age,q1,q2,q3,q4,q5,q6,q7,result\r\n";
            resp.forEach(elem => {
                console.log(elem);
                var d = new Date(elem.timestamp / 1000000);
                csv += d.toLocaleString() + ",";
                if(elem.age in ages) {
                    csv += ages[elem.age] + ","
                } else {
                    csv += "unknown,"
                }
                for(var i=0; i<7; i++) {
                    csv += elem.answer[i] + ","
                }
                csv += typs[elem.result] + "\r\n"
            })

            var blob = new File([csv], "Heartjump.csv", {type: "text/csv"});
            var url = URL.createObjectURL(blob);
            result.innerHTML = "현재 표본수: " + resp.length.toString() + "<br><a href='" + url + "' download='heartjump.csv'>CSV 다운로드</a>"

        }, function(status) {
            result.innerHTML = "DB Backend Error: " + status.toString()
        })
    }
}