const name="Hem";
const repoCount = 50;
// console.log(name + repoCount + " value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// to decleare string 

const gameName = new String(`Hem_Jora_com`);
console.log(typeof gameName);

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(6));
// console.log(gameName.indexOf('r'));

// const newString = gameName.substring(0 , 3);
// console.log(newString);

// const anotherString = gameName.slice(-4,3);
// console.log(anotherString);


const newStringOne = "   Hem   ";
console.log(newStringOne);
console.log(newStringOne.trim());



const url = "https://google.com/hitesh%20choudhary";

console.log( url.replace('%20','-'));

console.log(url.includes('hitesh'))

console.log(url.includes('hem'));

console.log(gameName.split('_'));