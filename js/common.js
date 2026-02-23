document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    disable: false,                //  AOS 끄지 않기! → 애니메이션 작동하게 두기
    startEvent: 'DOMContentLoaded', //  HTML이 다 불러와지면 바로 AOS 시작!
    initClassName: 'aos-init',      //  AOS가 준비됐다는 표시 클래스 (자동 붙음)
    animatedClassName: 'aos-animate', //  애니메이션이 실행될 때 붙는 클래스 이름
    useClassNames: false,           //  HTML에 data-aos 값 그대로 클래스 안 붙이기
    disableMutationObserver: false, //  새로 생긴 요소도 자동 감시해서 애니메이션 적용
    debounceDelay: 50,              //  창 크기 바꿀 때 0.05초 기다렸다 계산 (너무 자주 안 하게)
    throttleDelay: 99               //  스크롤할 때 0.099초마다 한 번씩 체크 (성능 좋게!)
  });


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
