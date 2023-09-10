import {
  isAnagram
} from "./variations";

const answer1 = document.querySelector("#answer1");

const wordsa = document.querySelector("#wordsa");

const wordsb = document.querySelector("#wordsb");

wordsa.addEventListener("keyup", function() {
  const value1 = wordsa.value;
  const value2 = wordsb.value;
  answer1.textContent = (isAnagram(value1, value2) ? "✅✅✅ Anagram! ✅✅✅" : "❌❌❌ Not an Anagram! ❌❌❌");
});

wordsb.addEventListener("keyup", function() {
  const value1 = wordsa.value;
  const value2 = wordsb.value;
  answer1.textContent = (isAnagram(value1, value2) ? "✅✅✅ Anagram! ✅✅✅" : "❌❌❌ Not an Anagram! ❌❌❌");
});

wordsa.addEventListener('paste', function() {
  setTimeout(function() {
      const value1 = wordsa.value;
      const value2 = wordsb.value;
      answer1.textContent = (isAnagram(value1, value2) ? "✅✅✅ Anagram! ✅✅✅" : "❌❌❌ Not an Anagram! ❌❌❌");
    });
});

wordsb.addEventListener('paste', function() {
  setTimeout(function() {
    const value1 = wordsa.value;
    const value2 = wordsb.value;
    answer1.textContent = (isAnagram(value1, value2) ? "✅✅✅ Anagram! ✅✅✅" : "❌❌❌ Not an Anagram! ❌❌❌");
    });
});