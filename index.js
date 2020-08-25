class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-'\s]+/g, "");
  }

  static titleize(string) {
    const wordsArray = string.split(" ");
    const titleizedArray = [];
    titleizedArray.push(this.capitalize(wordsArray[0]));
    const exceptionsArray = [
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
    for (let i = 1; i < wordsArray.length; i++) {
      if (exceptionsArray.includes(wordsArray[i])) {
        titleizedArray.push(wordsArray[i]);
      } else {
        titleizedArray.push(this.capitalize(wordsArray[i]));
      }
    }
    return titleizedArray.join(" ");
  }
}
