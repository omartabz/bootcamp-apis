function longestWord(sentence) {
    const words = sentence.split(' ');
    let longest = words[0];
    
  
    for (const word of words) {
     if(word.length>= longest.length) {
      longest = word;  
      }
    }
   return longest;
  }
  
  function shortestWord(sentence) {
    const words = sentence.split(' ');
    let shortest = words[0];
    
  
    for (const word of words) {
     if(word.length <= shortest.length) {
      shortest = word;  
      }
    }
   return shortest;
  }
  function wordLengths(sentence) {
   let len = 0;
    const words = sentence.split('  ');
    for (const word of words) {
      len = len + word.length;
    }
    return len;
  }
  
    export  {longestWord, shortestWord, wordLengths}