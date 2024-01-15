console.log(" idar Kya Dekhne Aye Ho 😅")

function makeBubble() {
    var clutter = "";

    for (var i = 1; i <= 168; i++) {
        var rn = Math.floor(Math.random() * 10)
        clutter += `<div class="bubble">${rn}</div>`;
    }

    document.querySelector("#pbtm").innerHTML = clutter;
}
makeBubble();


var timer = 30;
function runTimer() {
    var timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else {
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML =`<h1>GAME OVER 😁</h1>`;
        }
    }, 1000);
}
runTimer();

var hitrn = 0;
function getNewHit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitrn;
}
getNewHit();


var score = 0;
function increaseScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}
increaseScore();


document.querySelector("#pbtm")
    .addEventListener("click", function (dets) {
        console.log();
        var clickednum = Number(dets.target.textContent);
        if (clickednum === hitrn) {
            increaseScore();
            makeBubble();
            getNewHit();
        }
    })

