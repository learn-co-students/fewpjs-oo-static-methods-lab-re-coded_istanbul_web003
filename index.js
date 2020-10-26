class Formatter {
  //add static methods here

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-'-'\s]+/g, "");
  }

  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static titleize(string) {
    let splitWords = string.split(" ");
    for (let i = 0; i < splitWords.length; i++) {
      splitWords[0] = this.capitalize(splitWords[0]);
      if (
        splitWords[i] !== "a" &&
        splitWords[i] !== "an" &&
        splitWords[i] !== "but" &&
        splitWords[i] !== "of" &&
        splitWords[i] !== "and" &&
        splitWords[i] !== "for" &&
        splitWords[i] !== "at" &&
        splitWords[i] !== "by" &&
        splitWords[i] !== "and" &&
        splitWords[i] !== "from" &&
        splitWords[i] !== "the"
      ) {
        splitWords[i] = this.capitalize(splitWords[i]);
      }
    }
    return splitWords.join(" ");
  }
}
