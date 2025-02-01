//FIRST 12 QUESTIONS ARE AI GENERATED-must check and remove useless

export const questionsArray = [
  {
    id: 1,
    question: 'What is the correct way to declare a JavaScript variable?',
    answers: [
      'var myVariable;',
      'let myVariable;',
      'const myVariable;',
      'All of the above',
    ],
    correctAnswer: 'All of the above',
    explanation:
      'In JavaScript, you can declare variables using `var`, `let`, or `const`. Each has different scoping rules and usage.',
  },
  {
    id: 2,
    question: 'Which method is used to add an element to the end of an array?',
    answers: ['push()', 'pop()', 'shift()', 'unshift()'],
    correctAnswer: 'push()',
    explanation:
      'The `push()` method adds one or more elements to the end of an array and returns the new length of the array.',
  },
  {
    id: 3,
    question: 'What does `typeof` operator return for `null`?',
    answers: ['object', 'null', 'undefined', 'string'],
    correctAnswer: 'object',
    explanation:
      "Due to a historical bug in JavaScript, the `typeof` operator returns 'object' for `null` instead of 'null'.",
  },
  {
    id: 4,
    question: 'Which symbol is used for comments in JavaScript?',
    answers: [
      '// for single-line comments',
      '/* */ for multi-line comments',
      '#',
      'Both // and /* */',
    ],
    correctAnswer: 'Both // and /* */',
    explanation:
      'JavaScript uses `//` for single-line comments and `/* */` for multi-line comments.',
  },
  {
    id: 5,
    question: 'How do you create a function in JavaScript?',
    answers: [
      'function myFunction() {}',
      'def myFunction() {}',
      'function: myFunction() {}',
      'func myFunction() {}',
    ],
    correctAnswer: 'function myFunction() {}',
    explanation:
      'Functions in JavaScript are defined using the `function` keyword followed by the function name and parentheses.',
  },
  {
    id: 6,
    question: 'What is the purpose of the `isNaN()` function?',
    answers: [
      'To check if a value is not a number',
      'To check if a value is null',
      'To convert a value to a number',
      'To parse a string to a number',
    ],
    correctAnswer: 'To check if a value is not a number',
    explanation:
      '`isNaN()` determines whether a value is NaN (Not-a-Number). If the value is NaN, it returns true.',
  },
  {
    id: 7,
    question: "What is the result of `2 + '2'` in JavaScript?",
    answers: ['22', '4', "'4'", 'NaN'],
    correctAnswer: '22',
    explanation:
      'When adding a number and a string, JavaScript performs type coercion, converting the number to a string and concatenating them.',
  },
  {
    id: 8,
    question:
      'Which JavaScript method is used to find the largest number in an array?',
    answers: ['Math.max()', 'Math.min()', 'Math.large()', 'Array.max()'],
    correctAnswer: 'Math.max()',
    explanation:
      '`Math.max()` takes arguments and returns the largest number. Use the spread operator to find the max in an array.',
  },
  {
    id: 9,
    question: 'Which JavaScript keyword is used to define a constant?',
    answers: ['const', 'let', 'var', 'constant'],
    correctAnswer: 'const',
    explanation:
      '`const` is used to declare constants, which are block-scoped and cannot be reassigned after initialization.',
  },
  {
    id: 10,
    question: 'What does `JSON.stringify()` do?',
    answers: [
      'Converts a JavaScript object to a JSON string',
      'Parses a JSON string into a JavaScript object',
      'Encodes data into Base64',
      'Minifies JSON data',
    ],
    correctAnswer: 'Converts a JavaScript object to a JSON string',
    explanation:
      '`JSON.stringify()` serializes a JavaScript object into a JSON-formatted string.',
  },
  {
    id: 11,
    question:
      'What will the following code output and why?\n\nconsole.log(myVar);\nvar myVar = 5;',
    answers: [
      'undefined, because of variable hoisting',
      '5, because the variable is initialized before logging',
      'ReferenceError, because myVar is not defined',
      'TypeError, because myVar is not assigned',
    ],
    correctAnswer: 'undefined, because of variable hoisting',
    explanation:
      'Variables declared with `var` are hoisted to the top of their scope but remain uninitialized until their declaration is encountered.',
  },
  {
    id: 12,
    question: 'What will `console.log(030)` output in JavaScript?',
    answers: [
      '24, because numbers starting with 0 are treated as octal literals',
      '30, because JavaScript ignores the leading zero',
      'NaN, because 030 is not a valid number',
      '0, because JavaScript removes the leading digits',
    ],
    correctAnswer:
      '24, because numbers starting with 0 are treated as octal literals',
    explanation:
      'In non-strict mode, numbers starting with `0` are interpreted as octal (base 8). `030` in octal equals 24 in decimal.',
  },
]
