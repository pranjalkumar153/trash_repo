var pb1 = document.getElementById("p1");
var pb2 = document.getElementById('p2');
var p1_sc = document.getElementById("p1_score");
var p2_sc = document.getElementById("p2_score");

var res = document.getElementById("res");
var num = document.getElementById("val").defaultValue;
var win_sc = document.getElementById("win");
win_sc.textContent = 5;
console.log(document.getElementById("val").value);
// Inititially, I thought that there are some bugs.
// But now it's working absolutely fine.
res.addEventListener("click", function() {
    num = parseInt(document.getElementById("val").value);
    win_sc.textContent = num;
    gameOver = false;
    var h1 = document.getElementById("p1_score");
    h1.classList.remove("winner");
    var h2 = document.getElementById("p2_score");
    h2.classList.remove("winner");
    h1.textContent = 0;
    h2.textContent = 0;
});


var gameOver = false;


pb1.addEventListener("click", function() {
    if (!gameOver) {
        var p1_score = parseInt(p1_sc.textContent);
        p1_score++;
        p1_sc.textContent = p1_score;
    }
    if (p1_score === num) {
        gameOver = true;
        var h = document.getElementById("p1_score");
        h.classList.add("winner");
    }
})
pb2.addEventListener("click", function() {
    if (!gameOver) {
        var p2_score = parseInt(p2_sc.textContent);
        p2_score++;
        p2_sc.textContent = p2_score;
    }

    if (p2_score === num) {
        gameOver = true;
        var h = document.getElementById("p2_score");
        h.classList.add("winner");
    }
})