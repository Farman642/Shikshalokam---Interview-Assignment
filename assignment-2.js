/* Assignment 2:

Given a string s, find the ASCII value of each character iteratively. If the ASCII value is even, increment the next character by (ASCII_value % 7). If the ascii value is odd, decrement the previous character by (ASCII_value % 5). Output the newly formed string. 
Note:
If a character has already been changed once, do not change that character again. 
If the new number is an invalid ASCII value, replace it with 83. */

function processString(s) {
    let result = [];
    let changedIndices = new Set();

    for (let i = 0; i < s.length; i++) {
        let char = s.charAt(i);
        let asciiValue = char.charCodeAt(0);

        if (!changedIndices.has(i - 1) && asciiValue % 2 === 0) {

            let nextAscii = (asciiValue + (asciiValue % 7)) % 128;
            result.push(String.fromCharCode(nextAscii));
            changedIndices.add(i + 1);

        } else if (!changedIndices.has(i + 1) && asciiValue % 2 === 1) {
            
            let prevAscii = (asciiValue - (asciiValue % 5) + 128) % 128;
            result.push(String.fromCharCode(prevAscii));
            changedIndices.add(i - 1);

        } else {
           
            result.push(String.fromCharCode(83));
        }
    }

    return result.join('');
}

// Example usage
let inputString = "sHQen}";
let processedString = processString(inputString);
console.log("Final Answer:", processedString);
