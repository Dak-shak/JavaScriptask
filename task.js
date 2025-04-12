// create a palindrome strings
function isPalindrome(str) {
    let reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}
console.log(isPalindrome("madam"));

// or 

function isPalindrome(str) {
  for (let i = 0; i < str.length / 2; i++) {
      if (str[i] !== str[str.length - 1 - i]) {
          return false;
      }
  }
  return true;
}

console.log(isPalindrome("madam"));

//   return the largest number in an array of numbers

let arr = [1, 30, 4, 21, 100, 1000];
let largest = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
        largest = arr[i];
    }
}
console.log(largest);

// factoria of number
 function calculateFactorial(num) {
        let factorial = 1;
        for (let i = 1; i <= num; i++) {
            factorial *= i; 
        }
        console.log(factorial);
    }
    calculateFactorial(7);

// sum of number in an arr 
let array = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < array.length; i++) {
    sum += array[i];
}
console.log(sum);


// return the vowel in a string
function countVowels(string) {
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let count = 0;    
    for (let i = 0; i < string.length; i++) { 
        for (let j = 0; j < vowels.length; j++) {  
            if (string[i] === vowels[j]) {  
                count++; 
            }
        }
    }

    console.log(count);
}
countVowels("God"); 

// return the largest number in an array of numbers
let numbers = [4, 10, 2, 99, 23];
let max = numbers[0];
function findLargestNumber(arr) {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  }
console.log(findLargestNumber(numbers)); 




// create a function that identify a prime number

function isPrime(num) {
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
console.log(isPrime(1));
console.log(isPrime(2)); 

//  in an array of numbers, fine the multiples of any number
function findMultiples(arr, num) {
    let multiples = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % num === 0) {
            multiples.push(arr[i]);
        }
    }
    return multiples;
}
console.log(findMultiples([1, 2, 3, 4, 5, 6], 2));  



// in an array of number fine the index of a number
function findIndex(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return "nothing found";
}  
console.log(findIndex([1, 2, 3, 4, 5], 6)); 




// Adashe function---- create a function that add a member to the list of members
let members = [];

function addMember(name, amount) {
  let member = {
    name: name,
    amount: amount
  };
  members.push(member);
  console.log(members);
}

addMember("praise", 200);

//  Update amount of member
function updateMember(name, amount) {
  for (let i = 0; i < members.length; i++) {
    if (members[i].name === name) {
      members[i].amount += amount; 
      break;
    }
  }
  console.log(members);
}
updateMember("praise", 100); 


// get all members
function getAllMembers() {
    console.log("All Members:");
    for (let i = 0; i < members.length; i++) {
      console.log(`${members[i].name}: ₦${members[i].amount}`);
    }
  }
getAllMembers();  

// withdraw money from member
function withdraw(name, amount) {
  for (let i = 0; i < members.length; i++) {
    if (members[i].name === name) {
      if (members[i].amount >= amount) {
        members[i].amount -= amount;
        console.log(`${name} withdrew ₦${amount}.Remaining balance: ₦${members[i].amount}`);
      } else {
        console.log(`${name} does not have enough balance.`);
      }
      break;
    }
  }
}
withdraw("praise", 100);

// Removed member
function removeMember(name) {
  for (let i = 0; i < members.length; i++) {
    if (members[i].name === name) {
      members.splice(i, 1);
      console.log(`${name} has been removed.`);
      break;
    }
  }
}
removeMember("praise");


