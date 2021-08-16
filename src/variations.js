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
  
  return "NOT ANAGRAM";
}

module.exports = { isAnagram };
