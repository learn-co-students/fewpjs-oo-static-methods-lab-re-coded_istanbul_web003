class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  static sanitize(string){
    return string.replace(/[^A-Za-z0-9- ']+/g, '');
  }
  static titleize(string){
    let stringArr= string.split(" ");
    function notSpecialWord(word){
      let specialWords= ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by','from'];
      return specialWords.find(e=>word===e);
    }
    return stringArr.map(word=>{
      if(stringArr.indexOf(word)===0||!notSpecialWord(word)){
        return this.capitalize(word);
      } 
      else{
        return notSpecialWord(word)
      }
    }).join(' ')

  }


}