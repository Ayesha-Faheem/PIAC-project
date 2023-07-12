function make_Album(artist_name, album_title, tracks = 0) {
  let object;

  if (tracks == 0) {
    object = { artist_name, album_title };
  } else {
    object = { artist_name, album_title, tracks };
  }

  return object;
}
let dictionary1 = make_Album("taylor swift" , "speak now")
let dictionary2 = make_Album("Harry Styles" , "FIne Line")
let dictionary3 = make_Album("BTS" , "Map of the Soul")

console.log(dictionary1);
console.log(dictionary2);
console.log(dictionary3);

console.log(make_Album("ayesha", "hehe" , 3));







