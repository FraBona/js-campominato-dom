const gridDomElement = document.querySelector('.grid');
const btnDomElement = document.querySelector('.play');

btnDomElement.addEventListener('click', function(){
  gridDomElement.innerHTML = '';

  const bombe = bombRandomNumber(16);
  console.log(bombe);

  for(let i = 0; i < 100; i++){
    const n = i + 1;

    const htmlCell = `<div class='cell'>${n}<div>`

    gridDomElement.innerHTML += htmlCell; 
  }

  const cellElements = document.querySelectorAll('.cell');
  console.log(cellElements)

  for(let i = 0; i < cellElements.length; i++){
    const cell = cellElements[i];
    console.log(cell);

    cell.addEventListener('click', function(){
      console.log('ho cliccato la cella: ' + i);
      cellElements[i].classList.add('color-cell');
    })
  }
})

function bombRandomNumber(number){

  const bombs = [];

  while(bombs.length < 16){
    const number = Math.floor(Math.random() * 100) + 1;

    if(bombs.includes(number) === false){
      bombs.push(number);
    }
  }

  return bombs;
}