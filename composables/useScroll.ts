export default function () {
  const scrollEvent = () => {
    const elementsArray = Array.from(
      document.getElementsByClassName("animation")
    ) as HTMLElement[];

    elementsArray.forEach((el)=>{
      el.classList.remove('on')
    }) // 애니메이션 초기화

    window.addEventListener("scroll", () => {
      elementsArray.forEach((el) => {
        const { top } = el.getBoundingClientRect();
        const startLine = window.innerHeight * 0.5; 
        if (top <= startLine) {
          el.classList.add("on");
        } 
      });
    }); // 라인 일정이상 넘어가면 애니메이션 ON
  };

  return { scrollEvent };
}
