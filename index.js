class Formatter {
  static capitalize(str){
      return str.charAt(0).toUpperCase() + str.slice(1);
  }
  static sanitize(str){
    return str.replace(/[^-,'A-Za-z0-9 ]+/g, "");
  }

  static titleize(str){
   let arr =  str.split(" ");
  
   for(let i= 0 ; i<arr.length; i++){
    if(i===0){
      arr[i]= arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    else if(arr[i]!= 'the' && arr[i]!= "an" && arr[i]!= "a" && arr[i]!= 'but' && arr[i]!= "of" && arr[i]!= 'and' && arr[i]!= "for" && arr[i]!= "at" && arr[i]!= "by" && arr[i]!= "from"){
      arr[i]= arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
   }
   return arr.join(" ");
  }
}