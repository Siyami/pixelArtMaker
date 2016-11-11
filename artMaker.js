// const blueBrush = document.getElementById('blue');
// const paintRight = document.getElementById('paintRight');
// const paintLeft = document.getElementById('paintLeft');
//
// blueBrush.addEventListener('click', function() {
//   paintRight.addEventListener('click', function() {
//     // paintRight.style.backgroundColor = 'blue';
//     document.getElementById('paintRight').style.backgroundColor =
//       "blue";
//   })
// });

////////////////////////////////////////////

const blueBrush = document.getElementById('blue');
const paintRight = document.getElementById('paintRight');
const paintLeft = document.getElementById('paintLeft');

blueBrush.addEventListener('click', function(event) {
  const controls = document.querySelector('#container');

  controls.addEventListener('click', (event) => {

    if (event.target === paintRight) {
      paintRight.classList.add('blue');
    } else if (event.target === paintLeft) {
      paintLeft.classList.add('blue');
    }
  });

});


////////////////
