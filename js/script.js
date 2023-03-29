
const container = document.querySelector('.container');
console.log(container);



//creo i box
for (let i = 1; i <= 100; i++) {
  let boxes = document.createElement('div');
  boxes.classList.add('box');
  boxes.classList.add('d-none');
  container.appendChild(boxes);
  
  console.log(boxes);
  
  boxes.append(i)

  //collegare il bottone
  const button = document.getElementById('genera');
  
  button.addEventListener('click', function(){
    boxes.classList.remove('d-none')
  })
} 
  

 

