document.addEventListener('DOMContentLoaded', () => {

  /* jsap */
  /* gsap.registerPlugin(ScrollTrigger);

  gsap.to('.pick_section ', {
	  trigger: '.tit_section',
		pin: true, 
		start: 'top top',
		end: '+=400',
		scrub: 1, 
  }); */


  /* 메인비주얼 */
const selecter={
  btn:".main_visual>.inner>.bottom_btn",
  main:".main_visual>.inner>.slide>.top_sw",
};

let btnOpt={
  slidesPerView:5,
  watchSlidesProgress:true,
};

let swiperBtn=new Swiper(selecter.btn,btnOpt);

let swiperMain=new Swiper(selecter.main,{
  loop:true,
  thumbs:{swiper:swiperBtn},
});


/* 서브 부분마우스 호버시 마우스 따라 원 움직임 */
document.querySelectorAll('.sub').forEach((wrap) => {

  const ballsPl = wrap.querySelectorAll('.main_visual .sub .num_txt, .num_txt p');
  const ballsMn = wrap.querySelectorAll('.main_visual .sub .txt>h3, .sub .txt p,.sub .txt');
  const ballsRo = wrap.querySelectorAll('.main_visual .sub .ball_all');
  wrap.addEventListener('mousemove', (e) => {

    const rect = wrap.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const moveX = (x - centerX) / 120;
    const moveY = (y - centerY) / 120;

    ballsPl.forEach((ball, i) => {
      const depth = (i + 1) * 8;
      ball.style.transform =
        `translate(${moveX * depth/9}px, ${moveY * depth/9}px)`;
    });

    ballsMn.forEach((ball, i) => {
      const depth = (i + 1) * 3;
      ball.style.transform =
        `translate(${moveX * depth/7}px, ${moveY * depth/7}px)`;
    });
    ballsRo.forEach((ball, i) => {
      const depth = (i + 1) * 3;
      ball.style.transform =  `rotateX(${moveX * depth}deg) rotateY(${moveY*depth}deg)`;
    });
  });

  wrap.addEventListener('mouseleave', () => {
    balls.forEach((ball) => {
      ball.style.transform = `translate(0,0)`;
    });

  });

});

/* 숫자 올라가는 카운트 효과 */
function countUp(element, target, duration = 2000) {
  const start = target * 0.65; // 65%부터 시작
  const startTime = performance.now();

  function update(now) {
    const progress = Math.min((now - startTime) / duration, 1);
    const value = Math.floor(start + (target - start) * progress);

    element.textContent =
      value.toLocaleString() + "원";

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

const numberEl = document.querySelector('.num_txt strong');
const targetNumber = 166439507143;

countUp(numberEl, targetNumber, 2000);

/* 메인 카드 선택부분 */
let swiper = new Swiper(".card_all", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 2,
  loop:true,
  navigation: {
    nextEl: ".swiper_button_next",
    prevEl: ".swiper_button_prev",
    },
  coverflowEffect: {
    rotate: -25,
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    },
  pagination: {
    el: ".swiper_pagination>li button",
    clickable: true,
  }
});

let pick_selector={
  btn:".arrow_btn swiper_button_next,.arrow_btn swiper_button_prev,.pick .tit_section swiper_pagination li",
  main:".pick>.inner card_all swiper-slide",
};

let pick_btn_opt={
  watchSlidesProgress:true,
};
let pickBtn = new Swiper(pick_selector.btn, pick_btn_opt);

let pickMain=new Swiper(pick_selector.main, {
  loop:true,
  thumbs:{swiper:pickBtn },
});


//marquee 
function marquee() {
  document.querySelectorAll('.marquee_wrap').forEach((wrap) => {
    const row = wrap.querySelector('.marquee_row'); /*  marquee_wrap의 자식인 marquee_row를 잡음 */
    const rowWidth = row.scrollWidth;

    //최소 2세트 이상 복제
    for(let i=1; i<5; i++){/* 클론 6개 복사 */
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