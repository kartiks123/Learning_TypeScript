var num = 10;
// let num:number="10"; this will also give an error as we can't specify a string value to a number type.
var str1 = "Hello";
var str2 = "10";
var isTrue = true;
// let isFalse:boolean="true"; // This gives us an Error as it should not return a string value, but a boolean value.
function add(n1, n2) {
    return n1 + n2;
}
var result = add(10, 20);
console.warn(result);
