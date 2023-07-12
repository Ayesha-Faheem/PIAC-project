let names = 'Ayesha Faheem';
console.log(names.toLowerCase());
console.log(names.toUpperCase());
function toTitleCase (text) {
    var index = 1
    var message = text.substr(0,1).toUpperCase()
    for (;index < text.length; index = index + 1) {
        let char = text.substr(index, 1);
        if (char == " ") {
            index = index + 1
            char = text.substr(index,1)
            message = message + " " + char.toUpperCase()
         }  else {
            message = message + char
         }

    }
    return message
    

}
console.log(toTitleCase("who are you what are you doing"))
