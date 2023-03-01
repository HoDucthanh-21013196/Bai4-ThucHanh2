var num1;
var num2;
function sosanh(num1, num2) {
    if (num1 > num2) {
        return num1;
    }
    else return num2;
}
console.log("Max trong 2 so: " + sosanh(10, 5));