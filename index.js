class Formatter {
  //add static methods here
  static capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  static sanitize(str){
    return str.replace(/[^ '0-9a-zA-Z-]/g,'')
  }

  static titleize(str){
    let arr = str.split(" ");
    let cap = arr.map((word,index) =>{
      if (index === 0){
        return Formatter.capitalize(word)
      }else{
          if (word === 'the'|| word === "a"|| word === "an"||word === 'but'||word ==="of"||word ==='and'||word ==="for"||word==='at'||word==="by"||word ==="from"){
            return word;
          }else{
            return Formatter.capitalize(word)
          }
        }
    })
    return cap.join(" ")
  }
}