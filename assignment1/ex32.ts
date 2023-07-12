const current_users = ["ayesha","lubna", "faheem","FATIMA", "umaima" ]
const new_users = ["khadija", "amna", "AYESHA", "rabia", "fatima"]
index=0
while (index < new_users.length) {
    
    if (current_users.map(user => user.toLowerCase()).includes(new_users[index].toLowerCase()) == true ){
        console.log(new_users[index], "please enter new username")
    }   else {
        console.log(new_users[index], " This username is available")
    }
    index= index + 1
}
console.log(new_users.length)