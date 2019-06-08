function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomValueFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function strReplaceAt(string, index, char) {
    var splitString = string.split("");
    splitString[index] = char;
    return splitString.join("");
}