
const container = document.querySelector('.container');
console.log(container);
 //collegare il bottone
  const button = document.getElementById('levels');

const select = document.querySelector('#levels');

select.addEventListener('change', function() {
  console.log(this.value);

  // eliminare tutti gli elementi con classe .box
  container.innerHTML = '';

  for (let i = 1; i <= this.value; i++) {
    let boxes = document.createElement('div');
    boxes.classList.add('box');
    // boxes.classList.add('d-none');
    container.appendChild(boxes);
    
    console.log(boxes);
    
    boxes.append(i)
  
    boxes.addEventListener('click', function (){
      boxes.classList.toggle('sky-blue');
      console.log('hai cliccato sul numero' +  (i))
      
  })
  
    button.addEventListener('click', function(){
      boxes.classList.remove('d-none')
    })
  
  } 

});



