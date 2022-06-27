const btn = document.getElementById('btn');
let clickTimeStamp = Date.now();
let counter = 0;
btn.addEventListener('click', (event) => {
  if (Date.now() - clickTimeStamp >= 1000) {
    console.log(`clicked ${++counter}`);
    clickTimeStamp = Date.now();
  }
});
