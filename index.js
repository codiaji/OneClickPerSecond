const btn = document.getElementById('btn');
btn.addEventListener('click', (event) => {
  let clickTime = Date.now();
  console.log(clickTime);
  const { target } = event;
  target.style['pointer-events'] = 'none';
  target.disabled = true;
  while (Date.now() - clickTime <= 10000) {}
  target.disabled = false;
  target.style['pointer-events'] = 'all';
});
