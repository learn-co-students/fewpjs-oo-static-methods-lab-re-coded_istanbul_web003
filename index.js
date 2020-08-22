class Formatter {
  //add static methods here
  static capitalize(str){
    return str[0].toUpperCase() + str.slice(1)
  }
  static sanitize(str){
    return str.replace(/[^A-Za-z0-9-' ]+/g, "")
  }
  static titleize(str){
    //let regex = /the|an|a|but|of|and|for|at|by|from|/g
    let a = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    let arr = str.split(" ");
    let newArr = []
    console.log(arr)
    newArr.push(Formatter.capitalize(arr[0]))

    for(let i = 1; i< arr.length; i++){
     if(a.includes(arr[i])){
        newArr.push(arr[i])
     }
     else{
          newArr.push(Formatter.capitalize(arr[i]));
     }
    }

    return newArr.join(" ")
  }
}
console.log(Formatter.titleize("a Tale of Two Cities"))