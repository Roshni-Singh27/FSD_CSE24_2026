const container = document.getElementById('container');
const button = document.getElementById('btn');

const h1 = document.createElement('h1');
h1.innerText = 'Resume';

const loader = document.createElement('h2');
loader.innerText = 'Loading Data...';
container.appendChild(loader);

const img=document.createElement('img');
//image.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAx4lgKkM7Eo6G7HNubupowDhCLEAvqCc6cspOlhc0IQ&s=10"

function generateResume() {

    try {

        container.innerHTML = '<h2>Roshni Singh</h2>';
        container.appendChild(h1); 
        container.appendChild(img);
        img.src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAx4lgKkM7Eo6G7HNubupowDhCLEAvqCc6cspOlhc0IQ&s=10';
    img.setAttribute('height',200);
    img.setAttribute('width',200);
    container.appendChild(img);

    } catch (e) {
        loader.innerText = 'Error in loading data';
    } finally {
        //loader.innerText = '';
        container.removeChild(loader);
    }
}
button.addEventListener('click', generateResume);