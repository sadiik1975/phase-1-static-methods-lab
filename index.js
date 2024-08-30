class Formatter {
  // Method to capitalize the first letter of a string
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  // Method to sanitize a string by removing all non-alphanumeric characters
  // except for dashes, single quotes, and spaces
  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-'\s]+/g, '');
  }

  // Method to titleize a string by capitalizing all words except the exceptions
  // and always capitalizing the first word
  static titleize(string) {
    const exceptions = [
      'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'
    ];
    const words = string.split(' ');
    return words
      .map((word, index) => {
        if (index === 0 || !exceptions.includes(word.toLowerCase())) {
          return this.capitalize(word);
        } else {
          return word;
        }
      })
      .join(' ');
  }
}

// Example usage:
// console.log(Formatter.capitalize('hello')); // 'Hello'
// console.log(Formatter.sanitize("Hello, World!")); // 'Hello World'
// console.log(Formatter.titleize('the quick brown fox jumps over the lazy dog')); 
// 'The Quick Brown Fox Jumps Over the Lazy Dog'
