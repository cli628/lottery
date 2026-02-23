document.addEventListener('DOMContentLoaded', () => {
const _SELECTOR={
  btn:".main_visual>.inner>.bottom_btn",
  main:".main_visual>.inner>.slide>.top_sw",
};

const _BTN_OPT={
  slidesPerView:5,
  watchSlidesProgress:true,
};

const swiperBtn=new Swiper(_SELECTOR.btn,_BTN_OPT);

const swiperMain=new Swiper(_SELECTOR.main,{
  loop:true,
  thumbs:{swiper:swiperBtn},
});



//marquee 
function marquee() {
  document.querySelectorAll('.marquee_wrap').forEach((wrap) => {
    const row = wrap.querySelector('.marquee_row'); /*  marquee_wrap의 자식인 marquee_row를 잡음 */
    const rowWidth = row.scrollWidth;

    //최소 2세트 이상 복제
    for(let i=1; i<10; i++){/* 클론 9개 복사 */
      wrap.appendChild(row.cloneNode(true));
    }
    const rows = wrap.querySelectorAll('.marquee_row');
    let x = 0;

    function step() {
      const dir = wrap.classList.contains('reverse') ? 1 : -1; /* reverse 들어있는거 아닌거 잡음  트루일땐1, 아닐땐 -1*/
      x += dir; //이동

      rows.forEach((r, i) => {
        let offset = x + i * rowWidth; /* rowWidth : 진짜 가로값 */

        if(dir === -1) {
          //왼쪽 이동
          if(offset <= -rowWidth) {offset += rowWidth * rows.length} /* rowWidth가 화면 밖으로 나가면 뒤로 워프시킴 */
        }else{
          //오른쪽 이동
          if(offset >= rowWidth) {offset -= rowWidth * rows.length}
        }
        r.style.transform = `translateX(${offset}px)`
      })
      requestAnimationFrame(step)
    }
    requestAnimationFrame(step)/* 화면에서 보일때만 실행함 */
  })
}

marquee();











});