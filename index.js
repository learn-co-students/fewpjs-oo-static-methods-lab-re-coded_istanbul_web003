class Formatter {
  static capitalize(string){
      return string.charAt(0).toUpperCase() + string.slice(1);
  }
  static sanitize(string){
    return string.replace(/[^-,'A-Za-z0-9 ]+/g, "");
  }

  static titleize(string){
   let splitted =  string.split(" ");
   let excluded = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
   let newArray = [];
   newArray.push(Formatter.capitalize(splitted[0]));

   for(let i = 1 ; i < splitted.length; i++){
    if(excluded.includes(splitted[i])){
      newArray.push(splitted[i])
    } else {
      newArray.push(Formatter.capitalize(splitted[i]))
    }
  }
  return newArray.join(" ");
}
}