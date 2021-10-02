var button = document.querySelector('button');
var h1 = document.querySelector('h1');
var body = document.querySelector('body');
var colors = ['#FF5733', '#DFFF00', '#FFBF00', '#FF7F50', '#DE3163', '#9FE2BF', '#40E0D0','#6495ED', '#CCCCFF'];

body.style.backgroundColor = '#ffff';
button.addEventListener('click', changeBackground);

function changeBackground(){
    var colorIndex = parseInt(Math.random()*colors.length);
    body.style.backgroundColor = colors[colorIndex];
    h1.innerHTML = colors[colorIndex];
    h1.style.color = colors[colorIndex];
}