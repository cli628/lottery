document.addEventListener('DOMContentLoaded', () => {

  /*  // jsap
  document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger)
  // gsap code here!

  
  }); */






  const header = document.querySelector('header');
  const ham_btn = document.querySelector('.ham_icon'); // 버튼(3줄)
  const ham_panel = document.querySelector('.ham_menu'); // 펼쳐지는 패널

  if (!header || !ham_btn || !ham_panel) return;

  // 햄버거 아이콘 위치를 기준으로 ham_menu가 같은 자리에서 열리게(우상단 기준)
  const open_menu = () => {
    header.classList.add('on');
    document.documentElement.classList.add('no_scroll');
    document.body.classList.add('no_scroll');
  };

  const close_menu = () => {
    header.classList.remove('on');
    document.documentElement.classList.remove('no_scroll');
    document.body.classList.remove('no_scroll');
  };

  const toggle_menu = () => {
    if (header.classList.contains('on')) close_menu();
    else open_menu();
  };

  // 클릭 토글
  ham_btn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggle_menu();
  });

  // 패널 내부 클릭은 닫힘 방지
  ham_panel.addEventListener('click', (e) => e.stopPropagation());

  // 바깥(문서) 클릭하면 닫기
  document.addEventListener('click', () => {
    if (header.classList.contains('on')) close_menu();
  });

  // ESC로 닫기
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && header.classList.contains('on')) close_menu();
  });

});