var button = document.querySelector('button');
var body = document.querySelector('body');
var colors = ['green', 'yellow', 'orange', 'purple', 'pink'];

body.style.backgroundColor = '#fff';
button.addEventListener('click', changeBackground);

function changeBackground(){
    var colorIndex = parseInt(Math.random()*colors.length);
    body.style.backgroundColor = colors[colorIndex];
};


