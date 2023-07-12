const magicians= ["triumph", "lance", "criss"]

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
  }
make_great(magicians)
show_magicians(magicians)







