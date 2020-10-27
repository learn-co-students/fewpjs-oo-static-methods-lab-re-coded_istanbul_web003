class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-'-'\s]+/g, '');
  }

  static titleize(string){
    let words = string.split(" ");
    for(let i = 0; i < words.length; i++) {
      if(i == 0) {
      words[i] = Formatter.capitalize(words[i]);
      }
      if(words[i]== "a"|| words[i]=="an"|| words[i]=="the"|| words[i]=="but"|| words[i]=="of"|| words[i]=="and"|| words[i]=="for"|| words[i]=="at"|| words[i]=="by"|| words[i]=="from") {
      } else {
        words[i] = Formatter.capitalize(words[i]);
      }
    }
    words = words.join(" ");
    return words;
  }
}