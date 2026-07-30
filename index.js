//console.log("Hello I am using JS")

//const sum=function (a,b){
//   res=Math.sqrt(a)+Math.sqrt(b);
// return res;
// }

// const sum=(a,b)=>{
//    return a+b;
//}

//IIFE-immediate invoke function expression 
/*
(()=>{
    console.log("Heyy..using IIFE")
})();
*/
/*
let a=23;
if(a<40){
    let a=40;
    console.log("value of a inside block="+a)
}
console.log("value of a outside block="+a)
*/

//Callback function
/*
function sum(a,b){
    return a+b;
}

function msgWithSum(clbk,msg){
    const result=clbk(40,50);
    console.log("Hiiii,"+msg+"and your result is="+result)
}
msgWithSum(sum,"Rahul")
*/
/*
function login(error,msg){
    if(error){
        console.log("Error is:"+error)
    }
    else{
        console.log(msg)
    }
}
function loginHandler(username,password,clbk){
    if(username=="ptomer40" && password=="12345")
        clbk(null,"Login Success")
    else{
        clbk("Username or password is incorrect",null)
    }
}

loginHandler("ptomer40","12345",login)
*/

console.log("One")
setTimeout(()=>{console.log("Two")},1000)
console.log("Three")