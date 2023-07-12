const numbers = [1,2,3,4,5,6,7,8,9]
let count = 0
for (; count < 9 ; count = count +1 ) {
    if (numbers[count] == 1) {
        console.log ("1st")
}   else if (numbers[count] == 2){
    console.log("2nd")
}   else if (numbers[count] == 3){
    console.log("3rd")
}   else {
    console.log(numbers[count],"th")
}
}
