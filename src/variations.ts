/**
 * @param {string} string 1,
 * @param {string} string 2,
 * @return {boolean} result of anagram comparison
 */
function isAnagram(str1: string, str2: string) {
  // Earliest correct exit opportunity: identical strings are anagram
  if (str1 === str2) {
    return true;
  }
  // Are the strings the same length? Exit if not;
  if (str1.length !== str2.length) {
    console.log("Strings not same length");
    return false;
  }

  // Function to create character map from a string
  function createCharacterMap(text: string) {
    let map: any = {};
    for (let char of text) {
      char = char.toLowerCase();
      if (map.hasOwnProperty(char)) {
        map[char]++;
      } else {
        map[char] = 1;
      }
    }
    return map;
  }
  // Create Character Maps
  const str1map = createCharacterMap(str1);
  const str2map = createCharacterMap(str2);

  // Is mapped character in str1 in str2?
  // Issue of characters existing in str2 but not str1 addressed by string length check
  for (let char in str1map) {
    if (str1map[char] !== str2map[char]) {
      return false;
    }
  }

  return true;
}

module.exports = { isAnagram };
