let guests = ["father", "mother", "grandparents"];
let count1 = 0;
for (; count1 < 3 ; count1= count1 + 1 ) {
    console.log("My dear ", guests[count1] ," I would like to invite you to my house for dinner at 15th of july.")
}
guests[2] = "sister"
let count2 = 0
for (; count2 < 3 ; count2= count2 + 1 ) {
    console.log("My dear ", guests[count2] ," I would like to invite you to my house for dinner at 15th of july.")
}
console.log("Grandparents are busy on 15th of july so they cannot make it to dinner");
