'Use strict'
window.addEventListener('DOMContentLoaded', ()=> {
  /* slider */
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

/* табы */
const wrapper = document.querySelector('.tab__tabwrapper');
      tabs = document.querySelectorAll('.tab__item');
      content = document.querySelectorAll('.tab__wrappercard');
      divintabs = document.querySelectorAll('.click');
      function hideContent() {
        content.forEach(elem=>{
          elem.classList.remove('tab__showtab')
        }) 

        tabs.forEach(elem=>{
          elem.classList.remove('tab__active')
        })
      }

      function showTab(i) {
        content[i].classList.add('tab__showtab')
        tabs[i].classList.add('tab__active')
      }
      

      wrapper.addEventListener('click', (e)=>{
       function universe(selector, variable) {
        if(e.target && e.target.classList.contains(selector)){
          variable.forEach((item, i)=>{
            if(e.target === item){
              hideContent() 
              showTab(i)
            }
          })
         }
       }
       universe('tab__item', tabs);
       universe('click', divintabs)
      })
})