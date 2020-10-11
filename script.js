let randomTable = [0, 1, 2, 3, 4, 5, 6, 7, 8];
const blocks = [...document.querySelectorAll('.block')];
const circles = [...document.querySelectorAll('.circle')];
const crosses = [...document.querySelectorAll('.cross')];
const clear = document.querySelector('.clear');
let i = 0;

const randomNumber = () =>{
  return randomTable[Math.random() * randomTable.length | 0]
}

  blocks.forEach((block, index) =>{
    block.addEventListener('click', function(){

      randomTable.splice(randomTable.indexOf(index), 1)
      block.style.pointerEvents = "none";
      crosses[index].classList.add('show');

if(i == 0 && index != 4){
  blocks[4].style.pointerEvents = "none";
  randomTable.splice(randomTable.indexOf(4), 1);
  circles[4].classList.add('show')
  
}
else{
  const random = randomNumber();
  blocks[random].style.pointerEvents = "none";
  randomTable.splice(randomTable.indexOf(random), 1);
  circles[random].classList.add('show');
}

i++;

    })
  })

  clear.addEventListener('click', () =>{

    randomTable = [0, 1, 2, 3, 4, 5, 6, 7, 8];

    blocks.forEach(block =>{
      block.style.pointerEvents = "auto"
    })

    circles.forEach(circle =>{
      circle.className = "far fa-circle circle"
    })

    crosses.forEach(cross =>{
      cross.className = "fas fa-times cross"
    })

    i=0;
  })