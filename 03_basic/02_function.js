function calcultateCartPrice(val1,val2,...num1){//rest operator ...
    //val1 and val2 takes first two number other goes to array ma 
return num1;
}
// console.log(calcultateCartPrice(200,333,555,600));


//object and function 
const user ={
    username :"Hem Jora",
    price:199
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and pric is ${anyobject.price}`);
}
// handleObject(user);
handleObject ( {
    username:"sam",
    price:199
})

//array in fuction 
const myNewArray = [200,400,100,500]
function returnSecondValue(getArray){
return getArray[1];
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,100,500]));