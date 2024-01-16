// var c = 300;
let a = 300;
if(true)
{
    let a = 10;
    const b = 20 ;
    // var c = 30;
    // console.log("inner:",a);
}


// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username ="Hem";
    function two (){
        const website = "youtube";
        // console.log(username);
    }
    // console.log(website);
    two()
}
one()
if(true){
    const username = "hem";
    if(username === "hem"){
        const website = " Youtube"
        // console.log((username + website));
    }

}


//++++++++++++++++++++++++++ interesting +++++++++++++++++++++
//normal function ----
console.log(addOne(5));
function  addOne(num){
    return num + 1;
}


//expression -----
const addTwo = function(num){
    return num+2;
}
addTwo(5);

