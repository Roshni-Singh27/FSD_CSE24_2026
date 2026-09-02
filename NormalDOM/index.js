//console.log("hello");
const root=document.getElementById("container");
const button=document.getElementById("btn");
const h2=document.createElement('h2');
const img=document.createElement('img');
const div=document.createElement('div');
//console.log(root);

function showData(){
try{
    h2.innerText='Welcome to DOM';
    h2.style.color='red'
    h2.style.backgroundColor='cyan';
    img.src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAx4lgKkM7Eo6G7HNubupowDhCLEAvqCc6cspOlhc0IQ&s=10';
    img.setAttribute('height',200);
    img.setAttribute('width',200);
    div.style.border='solid green 2px';
    div.appendChild(h2);
    div.appendChild(img);
    root.appendChild(div);
    root.appendChild(button);
    //root.appendChild(img);
    //root.appendChild(h2);
    //alert("Hiii");
    
}catch(e){
    console.log("Error is"+e);
}
finally{
    root.removeChild(button);
}
}
button.addEventListener('click',showData);