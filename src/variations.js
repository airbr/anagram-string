/** 
 * @param {string} string 1, 
 * @param {string} string 2,
 * @return {string} result of anagram comparison
 */
function isAnagram(str1, str2) {

  // Earliest correct exit opportunity: identical strings are anagram
  if(str1 === str2) {
    return "ANAGRAM";
  }
  // Function to create character map from a string
  function createCharacterMap(text) {
    let map = {};
    for (let char of text) {
        char = char.toLowerCase();
        if (map.hasOwnProperty(char)) {
            map[char]++
        } else {
            map[char] = 1
        }
    }
    return map;
  }
  // Create Character Maps
  const str1map = createCharacterMap(str1);
  const str2map = createCharacterMap(str2);

  // Is character in str1 in str2?
  for (let char in str1map) {
    if (str1map[char] !== str2map[char]) {
      return "NOT ANAGRAM!"
    }
  }
    // Is character in str2 in str1?
  for (let char in str2map) {
    if (str2map[char] !== str1map[char]) {
      return "NOT ANAGRAM!"
    }
  }
  // If made it this far, is determined to be an Anagram
  return "ANAGRAM!"
}

module.exports = { isAnagram };
