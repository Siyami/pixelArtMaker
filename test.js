let color;

const paintColors = document.querySelector('#container2');
const paintBox = document.querySelector('#container');

paintColors.addEventListener('click', (event) => {
  color = event.target.id;
});

paintBox.addEventListener('click', (event) => {
  event.target.setAttribute('class', "box " + color);
});

// or another solution

// const blueBrush = document.getElementById('blue');
// const redBrush = document.getElementById('red');
//
// const paintRight = document.getElementById('paintRight');
// const paintLeft = document.getElementById('paintLeft');
//
// // Function invokes if user clicks blueBrush
// blueBrush.addEventListener('click', function(event) {
//
//   const controls = document.querySelector('#container');
//
//   controls.addEventListener('click', (event) => {
//
//     if (event.target === paintRight) {
//       paintRight.classList.add('blue');
//     } else if (event.target === paintLeft) {
//       paintLeft.classList.add('blue');
//     }
//   });
// });
//
// // Function invokes if user clicks redBrush
// redBrush.addEventListener('click', function(event) {
//
//   const controls = document.querySelector('#container');
//   controls.addEventListener('click', (event) => {
//
//     if (event.target === paintRight) {
//       paintRight.classList.add('red');
//     } else if (event.target === paintLeft) {
//       paintLeft.classList.add('red');
//       console.log(paintLeft.classList);
//     }
//   });
// });
