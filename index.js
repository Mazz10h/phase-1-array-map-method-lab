const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

function titleCased() {
  return tutorials.map(function (title) {
    return title
      .split(" ")
      .map(function (word) {
        const lower = word.toLowerCase();

        const specialWords = {
          oo: "OO",
          api: "API",
          nan: "NaN",
          jsonp: "JSONP",
          stoppropagation: "StopPropagation",
          preventdefault: "PreventDefault",
          constructor: "Constructor",
        };

        // Remove punctuation from word to compare, then re-attach
        const punctMatch = word.match(/[^\w]+$/); // captures trailing punctuation (e.g., '?')
        const punctuation = punctMatch ? punctMatch[0] : "";
        const baseWord = lower.replace(/[^\w]+$/, ""); // remove trailing punctuation

        if (specialWords[baseWord]) {
          return specialWords[baseWord] + punctuation;
        }

        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(" ");
  });
}
