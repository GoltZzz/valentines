const alternatives = [
  {text:"ayusin mo desisyon mo sa buhay gar", images:"images/cat-01.gif"},
  {text:"Sige tropa time", images:"images/cat-02.gif"},
  {text:"???", images:"images/cat-03.gif"},
  {text:"ay wow ayaw a", images:"images/cat-04.gif"},
  {text:"bahala ka", images:"images/cat-05.gif"},
]
const ohyes = {text:"I knew you would accept, Happy Valentines MY POCA", images:"images/cat-yes.gif"}
const cat = document.querySelector('.cat')
const text = document.querySelector('.text')
const buttons = document.querySelectorAll('.button')
const errorButton = document.querySelector('.button__error')

let count = 0;

function updateDisplay(item){
  cat.src = item.images
  text.innerHTML = item.text
}

errorButton.addEventListener('click', ()=>{
  count = 0;
  updateDisplay(alternatives[count])
  buttons.forEach(btn => btn.style.display = 'inline-block')
  errorButton.style.display = 'none'
})

buttons.forEach(button => {
  button.addEventListener('click', ()=>{
      if(button.textContent == "Yes"){
          updateDisplay(ohyes)
          buttons.forEach(btn => btn.style.display = 'none')
      }
      if(button.textContent == 'No'){
          count++
          if(count < alternatives.length){
              updateDisplay(alternatives[count])
          }else{
              buttons.forEach(btn => btn.style.display = 'none')
              errorButton.style.display = 'inline-block'
          }
      }
  })
})