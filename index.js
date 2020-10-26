class Formatter {
   static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  static sanitize(string) {
    let regex = /[^\w\s-']/g;
    return string.replace(regex, "");
  }
  static titleize(string) {
    let except = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let newArr = [];
    return newArr = string.split(" ").map((el, index) => {
      while (index === 0) {
        return el.charAt(0).toUpperCase() + el.slice(1)
      }
      if (!except.includes(el)) {
        return el.charAt(0).toUpperCase() + el.slice(1)
      } else {
        return el
      }
    }).join(" ")

  }
}