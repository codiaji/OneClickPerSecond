const btn = document.getElementById('btn');
btn.addEventListener('click', (event) => {
  const { target } = event;
  console.log('Clicked');
  target.style['pointer-events'] = 'none';
  target.disabled = true;
  setTimeout(() => {
    target.disabled = false;
    target.style['pointer-events'] = 'all';
  }, 1000);
});
