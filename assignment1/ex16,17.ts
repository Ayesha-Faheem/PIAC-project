let guests = ["father", "mother", "grandparents"];
guests[2] = "sister" ; 
guests.unshift("uncle") ; //adding element to the start of the array
guests.splice(3, 0, "friend") ;//adding element to the start of the array
guests.push("aunty"); //adding element to the end of the array
let count = 0
for (; count < 6 ; count= count + 1 ) {
    console.log("My dear ", guests[count] ," I would like to invite you to my house for dinner at 15th of july.")
}
console.log("I found a bigger dinner table to invite more people");


//Exercise 17
console.log("i can invite only two people for dinner");
index = 7;
for (; index > 3 ; index = index - 1) {
    console.log(guests.slice(-1), "sorry i cannot invite you to my dinner")
    guests.pop()
}
console.log(guests[0], "you are still invited");
console.log(guests[1], "you are still invited");
guests.pop();
guests.pop();
console.log(guests);





