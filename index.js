class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9' -]+/g, '');
  }

  static titleize(string) {
    const words = string.split(' ');
    const PREPOSITION_PATTERN = /\b(a|an|but|of|and|for|at|by|from|the)\b/i;

    let titleizedString = this.capitalize(words[0]);

    for(let i = 1; i < words.length; i++) {
      console.log(words[i], PREPOSITION_PATTERN.test(words[i]));
      console.log(words[i], PREPOSITION_PATTERN.test(words[i]));
      if(PREPOSITION_PATTERN.test(words[i])) {
        titleizedString += ` ${words[i]}`;
      } else {
        titleizedString += ` ${this.capitalize(words[i])}`;
      }
    }
    
    return titleizedString;
  }
}