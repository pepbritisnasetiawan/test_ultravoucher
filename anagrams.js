let words = ['cook', 'save', 'taste', 'aves', 'vase', 'state', 'map'];

function groupAnagram(strs) {
  let anagrams = {};

  for (let word of strs) {
    let sorted = word.split('').sort().join('');

    if (anagrams[sorted]) {
      anagrams[sorted].push(word);
    } else {
      anagrams[sorted] = [word];
    }
  }

  let result = [];

  for (let key in anagrams) {
    if (anagrams.hasOwnProperty(key)) {
      result.push(anagrams[key]);
    }
  }

  return result;
}

console.log(groupAnagram(words));
