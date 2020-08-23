class Formatter {
  //add static methods here
  
  static capitalize(str){
    let cap = str.charAt(0).toUpperCase();
    str = str.slice(1);
    return cap+str;
  }

  static sanitize(str){
    return str.replace(/[^\w'\-\s]/g, '')
  }
  //'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', and 'from'
  
  static titleize(str){
    let arr= str.split(" ")
    let newArr= [];
     arr.forEach( word=> { 
      //  console.log(word)

      if(word === 'the'|| word === "a"|| word === "an"||word === 'but'||word ==="of"||word ==='and'||word ==="for"||word==='at'||word==="by"||word ==="from"){
        // console.log("if")
        // console.log(Formatter.capitalize(word))
       newArr.push(word)
      }else{
         word = Formatter.capitalize(word)
         newArr.push(word)
      }
      
    })
    let first = newArr[0].charAt(0).toUpperCase()+newArr[0].slice(1);
    newArr[0]= first;
    // console.log("arr", newArr)
    let newStr= newArr.join(" ")
    // console.log(newStr)
    return newStr
  }
}
