const blueBrush = document.getElementById('blue');
// const redBrush = document.getElementId('red');
const paintRight = document.getElementById('paintRight');

blueBrush.addEventListener('click', function() {
  paintRight.addEventListener('click', function() {
    // paintRight.style.backgroundColor = 'blue';
    document.getElementById('paintRight').style.backgroundColor =
      "blue";
  })
});
