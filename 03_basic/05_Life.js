//Immediately invoked Functions Expressions(Life)

function  chai() {
    console.log("Using Life");
}
// chai()

(function two(){
    console.log("Here we can use it");
})();

( (username) =>{
    console.log(`DB USING ${username} `)
})("katapa")