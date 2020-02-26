// 6 kyu

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.
// If anything in the text isn't a letter, ignore it and don't return it.
// "a" = 1, "b" = 2, etc.

function alphabetPosition(text) {
    let result = "";
    for (i = 0; i < text.length; i++) {
      let code = text.toLowerCase().charCodeAt(i)
      if (code > 96 && code < 123) result += (code - 96) + " ";
    }
    return result.slice(0, result.length - 1);
}