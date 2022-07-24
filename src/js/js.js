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

/* изменение карточек */
const more = document.querySelectorAll('.tab__more');
      prev = document.querySelectorAll('.tab__prev');
      card1 = document.querySelectorAll('.tab__card');
      card2 = document.querySelectorAll('.tab__cardtextdesc');   

      more.forEach((elem, i)=>{
        elem.addEventListener('click', ()=>{  
            card1[i].style.transform = 'translateX(-100%)'
            card2[i].style.transform = 'translateX(-100%)'          
        })
      })
      
      prev.forEach((elem, i)=>{
        elem.addEventListener('click', ()=>{          
            card1[i].style.transform = 'translateX(0%)'
            card2[i].style.transform = 'translateX(100%)'          
        })
      })

/* модальные окна */
const activeButton = document.querySelectorAll('.activeconsultation');
      modal1 = document.querySelector('.modal');
      modalClose = document.querySelector('.modal__close');

      modalOrder = document.querySelector('.modal-order');
      modalOrderclose = document.querySelector('.modal-order__close-order');
      modalOrderactive = document.querySelectorAll('.tab__cardbutton');
      pulsometrDescr = document.querySelectorAll('.tab__cardtitle');
      modalTitle = document.querySelector('.modal-order__title2-order')

      function showModal() {
        activeButton.forEach(item=>{
          item.addEventListener('click',()=>{
            modal1.style.display = 'block'
            
          })
        })
      }
      showModal()
      function closeModal() {
        modalClose.addEventListener('click',()=>{
            modal1.style.display = 'none'
          })
      }
      closeModal()
     /* для секции с табами */

     function showModalorder() {
      modalOrderactive.forEach((item, i)=>{
        item.addEventListener('click',()=>{
          modalOrder.style.display = 'block';
          modalTitle.textContent = pulsometrDescr[i].textContent

        })
      })
    }
    showModalorder()
    
    function closeModalorder() {
      modalOrderclose.addEventListener('click',()=>{
        modalOrder.style.display = 'none'
        })
    }
    closeModalorder()
    
})