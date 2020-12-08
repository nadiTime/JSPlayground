// Select halfs

// const lowerHalf = document.querySelector('.lower-half');
// const upperHalf = document.querySelector('.upper-half');
const red = document.querySelector('.red');

// // Add event listener to red
// red.addEventListener('mouseenter', (e) => {
//   if (red.classList.contains('animation-down')) {
//     red.classList.remove('animation-down');
//   }
//   red.classList.add('animation-up');
// });
// red.addEventListener('mouseleave', (e) => {
//   if (red.classList.contains('animation-up')) {
//     red.classList.remove('animation-up');
//   }
//   red.classList.add('animation-down');
// });
const width = red.offsetWidth;
const height = red.offsetHeight;
red.addEventListener('mouseenter', (e) => {
  red.style.borderRadius = '50%';
  red.style.width = `${width * 1.2}px`;
  red.style.height = `${height * 1.2}px`;
});
red.addEventListener('mouseleave', (e) => {
  red.style.borderRadius = '4%';
  red.style.width = `${width}px`;
  red.style.height = `${height}px`;
});

const timer = setInterval(() => {
  grow(shrink);
}, 500);

function grow(callback) {
  console.log('grow');
  red.style.borderRadius = '50%';
  red.style.width = `${width * 1.2}px`;
  red.style.height = `${height * 1.2}px`;
  setTimeout(() => {
    callback();
  }, 250);
}

function shrink() {
  console.log('shrink');
  red.style.borderRadius = '4%';
  red.style.width = `${width}px`;
  red.style.height = `${height}px`;
}
