var myStr = "Paragon is the best!";

function useMethods(str){
    var myObject = {
        myReverse: "",
        countCharacters: 0   
    };
    var myArr = myStr.split("");
    var myArrReverse = myArr.reverse();
    var myReverse = myArrReverse.join("");
    
    //var countCharacters = myArr.map();
    //console.log(myReverse);
    return myStr;
}
console.log(useMethods());

module.exports = useMethods;