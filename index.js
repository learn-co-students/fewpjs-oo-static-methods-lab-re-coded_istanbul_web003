class Formatter {
  //add static methods here
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  static sanitize(str) {
    return str.replace(/[^A-Za-z0-9 '-]/g, '');
  }

  static titleize(str) {
    let arr = [];
    let unCapitalize = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let strSplit = str.split(' ');
    for (let i = 0; i < strSplit.length; i++) {
      if (i === 0 ) {
        arr.push(this.capitalize(strSplit[i]));
      } else {
        if (unCapitalize.includes(strSplit[i])) {
          arr.push(strSplit[i]);
        } else {
          arr.push(this.capitalize(strSplit[i]));
        }
      }
    }
    return arr.join(' ');
  }
}