var temps = [
    [31, 32, 19, 37],
    [29, 27, 55, 36],
    [17, 27, 42, 46],
    [29, 52, 21, 64],
    [91, 27, 31, 61]
];

function myArrayFunction(arr){
    var newTemps = [...arr];
    var averageDayTemp = [];

    for (var i = 0; i < temps.length; i++){
        var average = 0;
        for (k = 0; k <temps[i].length; k++){
            average += newTemps[i][k];
        }
        averageDayTemp.push(average/temps[i].length);
    }

    return averageDayTemp;
}
console.log(myArrayFunction(temps));
module.exports = myArrayFunction; 