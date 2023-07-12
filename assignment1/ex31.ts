const usernames = []
let index= 0
for (; index < usernames.length; index = index + 1) {
    
    if (usernames[index] == "admin" ) {
        console.log("Hello admin, would you like to see a status report?")
    }   else {
    console.log("Hello " ,usernames[index], "thank you for logging in again.")}
}
if (usernames.length==0) {
    console.log("We need to find some users!")
}

