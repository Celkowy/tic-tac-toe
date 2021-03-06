let randomTable = [0, 1, 2, 3, 4, 5, 6, 7, 8];
const blocks = [...document.querySelectorAll('.block')];
const circles = [...document.querySelectorAll('.circle')];
const crosses = [...document.querySelectorAll('.cross')];
const clear = document.querySelector('.clear');
const showResult = document.querySelector('.show-result')
let i = 0;
let counter = 0;
let doNotShowLastMove = 0;
let x = 100;

const randomNumber = () =>{
  return randomTable[Math.random() * randomTable.length | 0];
}

const delayOnFading = (callback) =>{
  setTimeout(() =>{
    callback();
  } , 2250)
}

const ai = () =>{
  const random = randomNumber();
  blocks[random].style.pointerEvents = "none";
  randomTable.splice(randomTable.indexOf(random), 1);
  circles[random].classList.add('show');
  blocks[random].className += ' 2';
}

const displayResult = (content, color) =>{
  showResult.textContent = content;
  showResult.style.color = color;
}

const clearBoard = () =>{

randomTable = [0, 1, 2, 3, 4, 5, 6, 7, 8];

blocks.forEach((block) =>{
  block.style.pointerEvents = "auto";
  block.className = `block`
})

circles.forEach(circle =>{
  circle.className = "far fa-circle circle";
})

crosses.forEach(cross =>{
  cross.className = "fas fa-times cross";
})

displayResult();

counter = 0;
i = 0;
doNotShowLastMove = 0;
x = 100;
}

const disableAllBlocks = () =>{
  blocks.forEach(block =>{
    block.style.pointerEvents = "none";
  })
}

const hightlightResults = (element1, element2, element3, passTheClass) =>{
  element1.classList.add(passTheClass);

  setTimeout(() =>{
    element2.classList.add(passTheClass);
  }, 300)
  
  setTimeout(() =>{
  element3.classList.add(passTheClass);
  }, 600)
}

const userWin = () =>{
  if(blocks[0].className[6] == 1 && blocks[1].className[6] == 1 && blocks[2].className[6] == 1){
    displayResult('WIN', 'lightgreen');
    hightlightResults(blocks[0], blocks[1], blocks[2], 'green');
    delayOnFading(clearBoard);
    disableAllBlocks();
    doNotShowLastMove = 1;
  }
  else if (blocks[3].className[6] == 1 && blocks[4].className[6] == 1 && blocks[5].className[6] == 1){
    displayResult('WIN', 'lightgreen');
    hightlightResults(blocks[3], blocks[4], blocks[5], 'green');
    delayOnFading(clearBoard);
    disableAllBlocks();
    doNotShowLastMove = 1;
  }
  else if (blocks[6].className[6] == 1 && blocks[7].className[6] == 1 && blocks[8].className[6] == 1){
    displayResult('WIN', 'lightgreen');
    hightlightResults(blocks[6], blocks[7], blocks[8], 'green');
    delayOnFading(clearBoard);
    disableAllBlocks();
    doNotShowLastMove = 1;
  }
  else if (blocks[0].className[6] == 1 && blocks[3].className[6] == 1 && blocks[6].className[6] == 1){
    displayResult('WIN', 'lightgreen');
    hightlightResults(blocks[0], blocks[3], blocks[6], 'green');
    delayOnFading(clearBoard);
    disableAllBlocks();
    doNotShowLastMove = 1;
  }
  else if (blocks[1].className[6] == 1 && blocks[4].className[6] == 1 && blocks[7].className[6] == 1){
    displayResult('WIN', 'lightgreen');
    hightlightResults(blocks[1], blocks[4], blocks[7], 'green');
    delayOnFading(clearBoard);
    disableAllBlocks();
    doNotShowLastMove = 1;
  }
  else if (blocks[2].className[6] == 1 && blocks[5].className[6] == 1 && blocks[8].className[6] == 1){
    displayResult('WIN', 'lightgreen');
    hightlightResults(blocks[2], blocks[5], blocks[8], 'green');
    delayOnFading(clearBoard);
    disableAllBlocks();
    doNotShowLastMove = 1;
  }
  else if (blocks[0].className[6] == 1 && blocks[4].className[6] == 1 && blocks[8].className[6] == 1){
    displayResult('WIN', 'lightgreen');
    hightlightResults(blocks[0], blocks[4], blocks[8], 'green');
    delayOnFading(clearBoard);
    disableAllBlocks();
    doNotShowLastMove = 1;
  }
  else if (blocks[6].className[6] == 1 && blocks[4].className[6] == 1 && blocks[2].className[6] == 1){
    displayResult('WIN', 'lightgreen');
    hightlightResults(blocks[6], blocks[4], blocks[2], 'green');
      delayOnFading(clearBoard);
    disableAllBlocks();
    doNotShowLastMove = 1;
  }
  else if(blocks[0].className[6] == 2 && blocks[1].className[6] == 2 && blocks[2].className[6] == 2){
    displayResult('LOSS', 'red');
    hightlightResults(blocks[0], blocks[1], blocks[2], 'red');
    delayOnFading(clearBoard);
    disableAllBlocks();
    doNotShowLastMove = 1;
  }
  else if (blocks[0].className[6] == 2 && blocks[3].className[6] == 2 && blocks[6].className[6] == 2){
    displayResult('LOSS', 'red');
    hightlightResults(blocks[0], blocks[3], blocks[6], 'red');
    delayOnFading(clearBoard);
    disableAllBlocks();
    doNotShowLastMove = 1;
  }
  else if (blocks[3].className[6] == 2 && blocks[4].className[6] == 2 && blocks[5].className[6] == 2){
    displayResult('LOSS', 'red');
    hightlightResults(blocks[3], blocks[4], blocks[5], 'red');
    delayOnFading(clearBoard);
    disableAllBlocks();
    doNotShowLastMove = 1;
  }
  else if (blocks[6].className[6] == 2 && blocks[7].className[6] == 2 && blocks[8].className[6] == 2){
    displayResult('LOSS', 'red');
    hightlightResults(blocks[6], blocks[7], blocks[8], 'red');
     delayOnFading(clearBoard);
    disableAllBlocks();
    doNotShowLastMove = 1;
  }
  else if (blocks[0].className[6] == 2 && blocks[3].className[6] == 2 && blocks[6].className[6] == 2){
    displayResult('LOSS', 'red');
    hightlightResults(blocks[0], blocks[3], blocks[6], 'red');
    delayOnFading(clearBoard);
    disableAllBlocks();
    doNotShowLastMove = 1;
  }
  else if (blocks[1].className[6] == 2 && blocks[4].className[6] == 2 && blocks[7].className[6] == 2){
    displayResult('LOSS', 'red');
    hightlightResults(blocks[1], blocks[4], blocks[7], 'red');
    delayOnFading(clearBoard);
    disableAllBlocks();
    doNotShowLastMove = 1;
  }
  else if (blocks[2].className[6] == 2 && blocks[5].className[6] == 2 && blocks[8].className[6] == 2){
    displayResult('LOSS', 'red');
    hightlightResults(blocks[2], blocks[5], blocks[8], 'red');
    delayOnFading(clearBoard);
    disableAllBlocks();
    doNotShowLastMove = 1;
  }
  else if (blocks[0].className[6] == 2 && blocks[4].className[6] == 2 && blocks[8].className[6] == 2){
    displayResult('LOSS', 'red');
    hightlightResults(blocks[0], blocks[4], blocks[8], 'red');
    delayOnFading(clearBoard);
    disableAllBlocks();
    doNotShowLastMove = 1;
  }
  else if (blocks[6].className[6] == 2 && blocks[4].className[6] == 2 && blocks[2].className[6] == 2){
    displayResult('LOSS', 'red');
    hightlightResults(blocks[6], blocks[4], blocks[2], 'red');
    delayOnFading(clearBoard);
    disableAllBlocks();
    doNotShowLastMove = 1;
  }
  else if (counter == 5){

    displayResult('DRAW', 'gray');

    blocks.forEach(element =>{
      setTimeout(() =>{
        element.classList.add('gray');
      }, x)
      x+=75;
    })

    delayOnFading(clearBoard);
    disableAllBlocks();
    doNotShowLastMove = 1;

  }
}

  blocks.forEach((block, index) =>{
    block.addEventListener('click', function(){

      randomTable.splice(randomTable.indexOf(index), 1);
      block.style.pointerEvents = "none";
      crosses[index].classList.add('show');
      block.className += " 1";
      counter++;

      userWin();
     
      if(i == 0 && index != 4 && Math.floor(Math.random() * 2) == 1){
        blocks[4].style.pointerEvents = "none";
        randomTable.splice(randomTable.indexOf(4), 1);
        circles[4].classList.add('show');
        blocks[4].className += ' 2';
      }
      else{
          if(doNotShowLastMove == 0){
            ai();
            }
      }

      userWin();
      
      i++;

    })
  })
  
  clear.addEventListener('click', () =>{
    clearBoard();
    i = 0;
    doNotShowLastMove = 0;
    x = 100;
  })