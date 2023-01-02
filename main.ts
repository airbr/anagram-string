const lib = require("./src/variations.ts");
const result = lib.isAnagram(process.argv[2], process.argv[3]);
console.log(`The result is: ${result}`);