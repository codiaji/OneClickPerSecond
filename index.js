const btn = document.getElementById('btn');
let clickTimeStamp = Date.now();
let counter = 0;
const clickHandler = function () {
  const clickTimeStamp = Date.now();
  console.log(`clicked ${++counter}`);
  btn.removeEventListener('click', clickHandler);
  btn.disabled = true;
  while (Date.now() - clickTimeStamp <= 1000) {}
  this.addEventListener('click', clickHandler);
  this.disabled = false;
};

btn.addEventListener('click', clickHandler);
