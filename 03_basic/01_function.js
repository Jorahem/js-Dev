function addTwoNumbers(a,b){
    console.log(a+b);
}
// addTwoNumbers(5,4);

function addTwoNumbers(a,b){
//    let result = a+ b;
//    return result;

return a+b;
}
const result  = addTwoNumbers(3,4);
// console.log("Result :"+result);

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a user name ");
        return
    }
    return `${username} just logged in`;
}
// console.log(loginUserMessage("Smritty"));
console.log(loginUserMessage());
