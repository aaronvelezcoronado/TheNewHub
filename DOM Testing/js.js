const container = document.querySelector('#container');

const p = document.createElement('p');
p.style.color = 'red';
p.textContent = 'Hey I\'m red!';

const h3 = document.createElement('h3');
h3.style.color = 'blue';
h3.textContent = 'I\'m a blue h3!'



const div = document.createElement('div')
div.style.border = "solid 10px black";
div.style.backgroundColor = 'pink';

const h1 = document.createElement('h1')
h1.textContent = 'Im in a div!'

const p2 = document.createElement('p')
p2.textContent = 'ME TOO!'

container.append(p, h3, div)
div.append(h1, p2)

const btn = document.querySelector('#btn');
btn.addEventListener('click', function (e) {
    e.target.style.background = 'red';
  });




