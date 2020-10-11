var get_color = document.getElementById("get_color");
var num1 = Math.floor(Math.random() * (255));
console.log(num1);
var num2 = Math.floor(Math.random() * (255));
console.log(num2);
var num3 = Math.floor(Math.random() * (255));
console.log(num3);

var msg1 = get_color.textContent;
console.log("message1=" + msg1);

msg1 += "(" + num1 + "," + num2 + "," + num3 + ")";

get_color.textContent = msg1;
var col = [num1, num2, num3];
console.log(col);
var col_arr = [col];
console.log(col_arr);

console.log(col_arr[0]);

for (var i = 0; i < 5; i++) {
    var num1 = Math.floor(Math.random() * (255));
    console.log(num1);
    var num2 = Math.floor(Math.random() * (255));
    console.log(num2);
    var num3 = Math.floor(Math.random() * (255));
    console.log(num3);
    col = [num1, num2, num3];
    col_arr.push(col);
}

console.log(col_arr);

// shuffling the array by a random number
function shuffle(arra1) {
    var ctr = arra1.length,
        temp, index;

    // While there are elements in the array
    while (ctr > 0) {
        // Pick a random index
        index = Math.floor(Math.random() * ctr);
        // Decrease ctr by 1
        ctr--;
        // And swap the last element with it
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}
col_arr = shuffle(col_arr);
console.log(col_arr);


// adding the options