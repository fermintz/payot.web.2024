export default function(){
  
    const scrollEvent = ()=>{
      const elementsArray = Array.from(document.getElementsByClassName('animation')) as HTMLElement[];

      window.addEventListener('scroll',()=>{
        
        elementsArray.forEach((el) =>{
          const { top } = el.getBoundingClientRect();
          const startLine = window.innerHeight * 0.5

          if(window.scrollY <= 1){
            el.classList.remove('on')
          }
          if(top <= startLine){
            el.classList.add('on')
          }
        })
      })  
    }
  

  return {scrollEvent}
}