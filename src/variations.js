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
  // Are the strings the same length? Exit if not;
  if (str1.length !== str2.length) {
    console.log('Strings not same length');
    return "NOT ANAGRAM!";
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
 
  return "ANAGRAM!"
}

module.exports = { isAnagram };
