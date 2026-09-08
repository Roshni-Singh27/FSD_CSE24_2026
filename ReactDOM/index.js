const container=document.getElementById('root');
//console.log(container);
const root=ReactDOM.createRoot(container);
const h2=React.createElement('h2',{style:{color:'red',backgroundColor:'cyan'}},"Welcome to React App Development");//(name of element,styling,content of element)

const h1=React.createElement('h1',{style:{color:'blue'}},'ABES Engineering College');
const img=React.createElement('img',{src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAx4lgKkM7Eo6G7HNubupowDhCLEAvqCc6cspOlhc0IQ&s=10',style:{height:'200px',width:'200px'}})
const div=React.createElement('div',{style:{border:'2px solid red'}},img,h1,h2);


const h21=<h2>Hello World</h2> //JSX Syntax

root.render(h21);
//root.render([h1,h2]);
