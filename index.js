class Formatter {
  //add static methods here
  static capitalize(input) {
    return input.charAt(0).toUpperCase() + input.slice(1);
  }

  static sanitize(input) {
    return input.replace(/[^A-Za-z0-9- ']+/g, '');
  }

  static titleize(input) {
    
    let myString = input.split(' ');
    for (let i = 0; i < myString.length; i++) {
        let subString = myString[i].split('');
        console.log(subString)
        if(i === 0) {
          for (let j = 0; j < subString.length; j++) {
            subString[0] = subString[0].toUpperCase();
          } 
        }
        else if(myString[i] === "the" || myString[i] === "a" || myString[i] === "an" || myString[i] === "but" || myString[i] === "of" || myString[i] === "and" || myString[i] === "for" || myString[i] === "at" || myString[i] === "by"  || myString[i] === "from") {
          for (let j = 0; j < subString.length; j++) {
            subString[0] = subString[0];
          } 
        } else {
          for (let j = 0; j < subString.length; j++) {
            subString[0] = subString[0].toUpperCase();
         }
        }
        myString[i] = subString.join('');
    }

    return myString.join(' ');
  }
}


console.log(Formatter.titleize("a hello of by hello from this is a computer"))


// return input.split(' ').map(word => {
//   if(word === "the" || word === "a" || word === "an" || word === "but" || word === "of" || word === "and" || word === "for" || word === "at" || word === "by"  || word === "from") {
//     return word;
//   } else {
//     return word.charAt(0).toUpperCase() + word.slice(1);
//   }
// }).join(' ');
