// 1. Take a name and make it greet like "Hello, JOHN!"
let name1 = `JSON`;
console.log(`Hello ${name1}`);

// 2. Get the length of the string "JavaScript"
let task2="JavaScript";
console.log(task2.length)
// 3. Check if "apple" exists in "I like apple pie"
let sentence="I like apple pie";
let task4 = sentence.includes("apple")
console.log(task4)

// 4. Find where the word "code" starts in "Learn to code every day"
let sentence4="Learn to code every day";
console.log(sentence4.indexOf("code"));

// 5. Replace "bad" with "good" in "That is a bad idea"
let sentence5="That is a bad idea";
task5=sentence5.replace("bad","good");
console.log(task5);
// 6. Remove extra spaces from "   JavaScript   "
task6="   JavaScript   ";
console.log(task6.trim());
// 7. Reverse the string "hello"
let task7='hello';
let reversed=task7.split("").reverse().join("")
console.log(reversed)

// 8. Convert "hello world" → "Hello World"
let Task8 = "hello world"
step1=Task8.split("");
step1[0]="H";
step1[6]="W";
console.log(step1);
console.log(step1.join(""));
// 9. Convert "john.doe@gmail.com" → "j***@gmail.com"
let email="john.doe@gmail.com";
let splited=email.split("@");
let username = splited[0];
let newUsername = username[0] + "***";
let newEmail = maskedUsername + "@" + splited[1];
console.log(newEmail);
// 10. Count how many times 'a' appears in "banana"
let word="banana"
let count = word.split('a').length - 1;
console.log(count);
// 11. From "https://www.google.com" get "google.com"
let task11="https://www.google.com";
console.log(task11.search="www.google.com");
// 12. Check if "JavaScript" starts with "Java" and ends with "Script"
let task12="JavaScript"
let task12start = task12.includes("Java", 0)
let task12end=task12.includes("Script",4)
console.log(task12start)
console.log(task12)

// 13. Count how many times each word appears in "I love JavaScript because JavaScript is awesome"
let task13="I love JavaScript because JavaScript is awesome"
let words=task13.split("")
const wordCounts = words.reduce((acc, currentValue) => {
    acc[currentValue] = (acc[currentValue] || 0) + 1
    return acc
}, {}) 
console.log(wordCounts)
// 14. Return the longest word in a sentence
// 15. Convert "Learn JavaScript in 2025!" → "learn-javascript-in-2025"
let text = "Learn JavaScript in 2025!";
text = text.toLowerCase();
console.log(text.replaceAll(' ','-'))