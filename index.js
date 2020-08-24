class Formatter {
    //add static methods here
    static capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    static sanitize(str) {
        return str.replace(/[^A-Za-z0-9- ']+/g, "");
    }
    static titleize(str) {
        const arr = str.split(" ");
        const newArr = [];
        arr.map((x) => {
            if (
                arr.indexOf(x) === 0 ||
                (x !== "a" &&
                    x !== "an" &&
                    x !== "but" &&
                    x !== "the" &&
                    x !== "of" &&
                    x !== "and" &&
                    x !== "for" &&
                    x !== "at" &&
                    x !== "by" &&
                    x !== "from")
            ) {
                newArr.push(x.charAt(0).toUpperCase() + x.slice(1));
            } else {
                newArr.push(x);
            }
        });
        return newArr.join(" ");
    }
}
