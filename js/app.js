const gridDomElement = document.querySelector('.grid');
const btnDomElement = document.querySelector('.play');
const gameOverDomElement = document.querySelector('.game-over');
const pointDomElement = document.querySelector('.point');

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

  let cont = 0;

  for(let i = 0; i < cellElements.length; i++){
    const cell = cellElements[i];
    console.log(cell);
    console.log(bombe.includes(i + 1));
    cell.addEventListener('click', function(){

      if(bombe.includes(i + 1) === true){
        cellElements[i].classList.add('color-red');
        gameOverDomElement.innerHTML = 'GAME OVER'
        pointDomElement.innerHTML = 'il tuo punteggio é ' + cont;
      }
      else{
        cellElements[i].classList.add('color-cell');
        cont = cont + 1;
        console.log(cont);
        const htmlpoint = '<p>Il tuo punteggio é </p>' + cont
        pointDomElement.innerHTML = htmlpoint; 
      }
    })
   /* cell.addEventListener('click', function(){
      console.log('ho cliccato la cella: ' + i);
      cellElements[i].classList.add('color-cell');
    })*/
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