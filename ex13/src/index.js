var str = "Paragon!";

function myReverse(str) {
    var reversed = "";
    for (var i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    return reversed;
}

console.log(myReverse(str));
module.exports = myReverse; 