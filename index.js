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
/* 
console.log("One")
for(i=0;i<1000;i++){
    console.log("i="+i);
}
console.log("Three")
*/

const container=document.getElementById('container');
const button=document.getElementById('btn');
const h1=document.createElement('h1');
console.log(h1)
h1.innerText='ABES Engineering College';
const loader=document.createElement('h2');
container.appendChild(loader)

const img=document.createElement('img');

//console.log(button)
//console.log(container)
function ping(){
    //alert('server ping')
    /*
    container.innerHTML='<h2>Welcome to DOM</h2>'
    container.appendChild(h1);
    */
   try{
    loader.innerHTML='<h2>Loading Data....</h2>'
    container.innerHTML='<h2>Welcome to DOM</h2>'
    h1.style.backgroundColor='cyan';
    h1.style.color='red';
    container.appendChild(h1);
    img.src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAx4lgKkM7Eo6G7HNubupowDhCLEAvqCc6cspOlhc0IQ&s=10';
    img.setAttribute('height',200);
    img.setAttribute('width',200);
    container.appendChild(img);
   }catch(e){
    loader.innerHTML='<h2>Error in loading</h2>'
   }
   finally{
   //loader.innerText = '';
        container.removeChild(loader);
   }
}
button.addEventListener('click',ping);