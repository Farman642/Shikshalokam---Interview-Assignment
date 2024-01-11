/* Assignment 1:

Given a string s and a number x, print the shortest substrings which start and end with the same character and have lengths
 greater than or equal to x. If multiple substrings exist with the same shortest length, print them all.*/

let shortestSubString =(s,x)=>{
    let found =false;
    for(let i =0 ;i<s.length;i++){
        for (let j = i + x - 1; j < s.length; j++) {
            if (s[i] === s[j]) {
                let substring = s.substring(i, j + 1);
                if (substring.length >= x) {
                    console.log(substring);
                    found = true;
                    break;
                }
            }
        }
    }

    if (!found) {
        console.log("not-found");
    }
}