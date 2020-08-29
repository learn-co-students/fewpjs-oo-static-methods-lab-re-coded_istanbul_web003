class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  static sanitize(string) {
    return string.replace(  /[^A-Za-z0-9 '-]/g, '' )
  }
  static titleize(string){
    let filter = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let result = [];
    let arrayWords = string.split(" ");
    
    for (let i = 0; i < arrayWords.length; i++) {
      if (i == 0) {
        result.push(this.capitalize(arrayWords[i]))
      } else {
        if (filter.includes(arrayWords[i])) {
          result.push(arrayWords[i])
        } else {
          result.push(this.capitalize(arrayWords[i]))
        }
      }
    }
    return result.join(" ");
  }
}
