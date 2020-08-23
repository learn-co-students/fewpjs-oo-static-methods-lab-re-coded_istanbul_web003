class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-'-'\s]+/g, "");
  }
  static titleize(string) {
    let except = [
      "the",
      "a",
      "an",
      "but",
      "of",
      "and",
      "for",
      "at",
      "by",
      "from",
    ];
    let newArr = [];
    let splitStr = string.split(" ");
    for (let i = 0; i < splitStr.length; i++) {
      if (i === 0) {
        newArr.push(this.capitalize(splitStr[i]));
      } else {
        if (except.includes(splitStr[i])) {
          newArr.push(splitStr[i]);
        } else {
          newArr.push(this.capitalize(splitStr[i]));
        }
      }
    }
    return newArr.join(" ");
  }
}
