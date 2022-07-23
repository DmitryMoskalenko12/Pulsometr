'Use strict'
window.addEventListener('DOMContentLoaded', ()=> {
const slides = document.querySelectorAll('.slider__img');
      prev = document.querySelector('.slider__prev');
      next = document.querySelector('.slider__next');
      
      let slideIndex = 1;
      slide(slideIndex)
      function slide(n) {
        if(n > slides.length){
          slideIndex = 1
        }
        if(n < 1){
          slideIndex = slides.length
        }

        slides.forEach(item=>{
          item.style.display = 'none'
        } 
        )

        slides[slideIndex - 1].style.display = 'block'
        
      }

      function slidePlus(n) {
        slide(slideIndex += n)
      }

      prev.addEventListener('click', ()=>{
        slidePlus(1)
      })

      next.addEventListener('click', ()=>{
        slidePlus(-1)
      })

})