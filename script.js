let randomTable = [0, 1, 2, 3, 4, 5, 6, 7, 8];
const blocks = [...document.querySelectorAll('.block')];
const circles = [...document.querySelectorAll('.circle')];
const crosses = [...document.querySelectorAll('.cross')];
const clear = document.querySelector('.clear');
const showResult = document.querySelector('.show-result')
let i = 0;
let counter = 0;

const randomNumber = () =>{
  return randomTable[Math.random() * randomTable.length | 0];
}

const delayOnFading = (callback) =>{
  setTimeout(() =>{
    callback();
  } , 1250)
}

const ai = () =>{
  const random = randomNumber();
  blocks[random].style.pointerEvents = "none";
  randomTable.splice(randomTable.indexOf(random), 1);
  circles[random].classList.add('show');
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

delayOnFading(displayResult);

counter = 0;
i = 0;
}



const disableAllBlocks = () =>{
  blocks.forEach(block =>{
    block.style.pointerEvents = "none";
  })
}

// const highlightOutcome = (b1, b2, b2, color) =>{



// }

const userWin = () =>{
  if(blocks[0].className[6] && blocks[1].className[6] && blocks[2].className[6]){
    displayResult('WIN', 'lightgreen');
    delayOnFading(clearBoard);
    disableAllBlocks();
  }
  else if (blocks[3].className[6] && blocks[4].className[6] && blocks[5].className[6]){
    displayResult('WIN', 'lightgreen');
    delayOnFading(clearBoard);
    disableAllBlocks();
  }
  else if (blocks[6].className[6] && blocks[7].className[6] && blocks[8].className[6]){
    displayResult('WIN', 'lightgreen');
     delayOnFading(clearBoard);
    disableAllBlocks();
  }
  else if (blocks[0].className[6] && blocks[3].className[6] && blocks[6].className[6]){
    displayResult('WIN', 'lightgreen');
    delayOnFading(clearBoard);
    disableAllBlocks();
  }
  else if (blocks[1].className[6] && blocks[4].className[6] && blocks[7].className[6]){
    displayResult('WIN', 'lightgreen');
    delayOnFading(clearBoard);
    disableAllBlocks();
  }
  else if (blocks[2].className[6] && blocks[5].className[6] && blocks[8].className[6]){
    displayResult('WIN', 'lightgreen');
    delayOnFading(clearBoard);
    disableAllBlocks();
  }
  else if (blocks[0].className[6] && blocks[4].className[6] && blocks[8].className[6]){
    displayResult('WIN', 'lightgreen');
    delayOnFading(clearBoard);
    disableAllBlocks();
  }
  else if (blocks[6].className[6] && blocks[4].className[6] && blocks[2].className[6]){
    displayResult('WIN', 'lightgreen');
      delayOnFading(clearBoard);
    disableAllBlocks();
  }
  else if (counter == 5){
    displayResult('DRAW', '#666');
    delayOnFading(clearBoard);
  }
}

const aiWin = () =>{
  if(blocks[0].className[6] && blocks[1].className[6] && blocks[2].className[6]){
    displayResult('LOSS', 'red');
    delayOnFading(clearBoard);
    disableAllBlocks();
  }
  else if (blocks[3].className[6] && blocks[4].className[6] && blocks[5].className[6]){
    displayResult('LOSS', 'red');
    delayOnFading(clearBoard);
    disableAllBlocks();
  }
  else if (blocks[6].className[6] && blocks[7].className[6] && blocks[8].className[6]){
    displayResult('LOSS', 'red');
     delayOnFading(clearBoard);
    disableAllBlocks();
  }
  else if (blocks[0].className[6] && blocks[3].className[6] && blocks[6].className[6]){
    displayResult('LOSS', 'red');
    delayOnFading(clearBoard);
    disableAllBlocks();
  }
  else if (blocks[1].className[6] && blocks[4].className[6] && blocks[7].className[6]){
    displayResult('LOSS', 'red');
    delayOnFading(clearBoard);
    disableAllBlocks();
  }
  else if (blocks[2].className[6] && blocks[5].className[6] && blocks[8].className[6]){
    displayResult('LOSS', 'red');
    delayOnFading(clearBoard);
    disableAllBlocks();
  }
  else if (blocks[0].className[6] && blocks[4].className[6] && blocks[8].className[6]){
    displayResult('LOSS', 'red');
    delayOnFading(clearBoard);
    disableAllBlocks();
  }
  else if (blocks[6].className[6] && blocks[4].className[6] && blocks[2].className[6]){
    displayResult('LOSS', 'red');
      delayOnFading(clearBoard);
    disableAllBlocks();
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
     


      if(i == 0 && index != 4){
        blocks[4].style.pointerEvents = "none";
        randomTable.splice(randomTable.indexOf(4), 1);
        circles[4].classList.add('show');
      } else{
        ai();
      }
        
      

      i++;

    })
  })



  
  clear.addEventListener('click', () =>{
    clearBoard();
    i=0;
  })

  