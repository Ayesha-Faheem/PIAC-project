function cars(manufacturer , model ,...features ) {
    const object_car = {manufacturer , model}
    features.forEach((arg) => {
        const key = Object.keys(arg)[0];
        const value = arg[key];
        object_car[key] = value;
      });
    
    
    return object_car

}
console.log(cars("faheem", "honda", {color : "red color"} ))