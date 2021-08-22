import {
  isAnagram
} from "./variations.js";

const answer1 = document.querySelector("#answer1");

const wordsa = document.querySelector("#wordsa");

const wordsb = document.querySelector("#wordsb");

wordsa.addEventListener("keyup", function() {
  const value1 = wordsa.value;
  const value2 = wordsb.value;
  answer1.textContent = isAnagram(value1, value2);
});

wordsb.addEventListener("keyup", function() {
  const value1 = wordsa.value;
  const value2 = wordsb.value;
  answer1.textContent = isAnagram(value1, value2);
});

wordsa.addEventListener('paste', function() {
  setTimeout(function() {
      const value1 = wordsa.value;
      const value2 = wordsb.value;
      answer1.textContent = isAnagram(value1, value2);
    });
});

wordsb.addEventListener('paste', function() {
  setTimeout(function() {
    const value1 = wordsa.value;
    const value2 = wordsb.value;
    answer1.textContent = isAnagram(value1, value2);
    });
});