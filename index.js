class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.replace(/^./, string[0].toUpperCase())
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-'-'\s]+/g, "")
  }

  static titleize(string) {
    const words = [
      "the",
      "a",
      "an",
      "but",
      "of",
      "and",
      "for",
      "at",
      "by",
      "and",
      "from",
    ]
    let array = string.split(" ")
    for (let i = 0; i < array.length; i++) {
      array[0] = this.capitalize(array[0])
      if (!words.includes(array[i])) {
        array[i] = this.capitalize(array[i])
      }
    }
    return array.join(" ")
  }
}