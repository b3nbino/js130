/*
Given a sentence with numbers representing a word's location embedded within each word, return the sorted sentence.

Problem:
- Given a string with a number of words, each word containing a number, return the string reordered according to the numbers in the words. The numbers should be put in ascending order. The starting index is 1.
- Numbers are removed from the words

Question:
- Strings only as arguments
- Each word will have a number
- Other characters are fair game
- Words delimited by single spaces
- Maintain capitalization

- Take the string, split by words [is2, Thi1s, T4est, 3a]
  - Give me an array of words, with numbers included
- Iterate through the array, each time looking for the next largest number "Thi1s"
  - Replace the word with itself, with the number removed "This"
  - Add the cleaned up word to a result string "This"

Algorithm:
- Declare a result string
- Split the sentence into an array of words by single spaces
- Helper method: 
  - Pass in the array, the iteration number
  - Loop through the array of words, return the word containing that number
- Loop through the array, beginning with 1 up through the length of the array
  - Find the word in the array containing the index of the loop (converted a string)
  - Clean up the word
    - Helper method:
      Given a word, and i, find the index of i, slice the first and last part of the number together 
  - Add it to the string
- Return the string
*/

function rearrange(string) {
  if (string.trim() === "") {
    return "";
  }
  let sorted = "";
  const wordArray = string.split(" ");

  for (let i = 1; i <= wordArray.length; i += 1) {
    let word = findWord(wordArray, i);
    sorted += cleanUp(word, i) + " ";
  }

  return sorted.trim();
}

function findWord(arr, num) {
  let str = num.toString();

  let foundWord = arr.filter((word) => {
    return word.split("").includes(str);
  });

  return foundWord[0];
}

function cleanUp(word, num) {
  let idx = word.indexOf(num.toString());
  return word.slice(0, idx) + word.slice(idx + 1);
}

// console.log(cleanUp("4est", 4));

// console.log(findWord(['t2o', 'th3ree'], 3));

console.log(rearrange("is2 Thi1s T4est 3a")); // ➞ "This is a Test"

console.log(rearrange("4of Fo1r pe6ople g3ood th5e the2")); // ➞ "For the good of the people"

console.log(rearrange(" ")); // ➞ ""
console.log(rearrange("T2wo one!1 3three")); // "one! Two three"
