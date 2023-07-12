const locations = ["Saudia Arabia", "Turkey" , "Bali", "Switzerland", "America"];
console.log(locations)     //Print your array in its original order.                               
const ordered = [...locations].sort()  //Print your array in alphabetical order without modifying the actual list.
console.log(ordered);  //
console.log(locations); //Show that your array is still in its original order by printing it.
console.log(ordered.reverse());  //Print your array in reverse alphabetical order without changing the order of the original list.
console.log(locations)  //Show that your array is still in its original order by printing it again.
locations.reverse()   //Reverse the order of your list. Print the array to show that its order has changed.
console.log(locations)
locations.reverse()   //Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log(locations)
locations.sort()    //Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log(locations)
locations.reverse()   //Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log(locations)