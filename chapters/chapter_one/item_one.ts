const testArrayOne = [0, 2, 4, 3];

console.log(testArrayOne[3]);
console.log(testArrayOne[4]); // Throws run time error

const testArrayTwo = [0, 2, 4, 3] as const;

console.log(testArrayTwo[3]);
// console.log(testArrayTwo[4]) // Typescript doesn't allow this
