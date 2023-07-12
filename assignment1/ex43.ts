
function show_magicians(array) {
    let index = 0
    for (; index < array.length; index = index + 1) {
      console.log(array[index]);
    }
  }

function make_great(array){
  let index = 0
    for (; index < array.length; index = index + 1) {
      array[index] = "The Great " + array[index]
    }
    return array
  }

const magicians = ["triumph", "lance", "criss"]
const magiciancopy = ["triumph", "lance", "criss"]
const changed_magicians = make_great(magiciancopy)
show_magicians(magicians)
show_magicians(changed_magicians)
