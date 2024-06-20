'use strict';
function changeDiv(divId, btn) {
  // console.log(btn);
  const btns = document.querySelectorAll('.btn');
  btns.forEach(el => {
    if (el.classList.contains('active')) el.classList.remove('active');
  });
  btn.classList.add('active');

  const divs = document.querySelectorAll('.data');
  divs.forEach(el => {
    if (!el.classList.contains('hidden')) el.classList.add('hidden');
  });
  const divCurrent = document.getElementById(divId);
  divCurrent.classList.remove('hidden');
}
