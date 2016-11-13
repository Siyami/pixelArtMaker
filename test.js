let color;

const paintColors = document.querySelector('#container2');
const paintBox = document.querySelector('#container');

paintColors.addEventListener('click', (event) => {
  color = event.target.id;
});

paintBox.addEventListener('click', (event) => {
  event.target.setAttribute('class', "box " + color);
});
