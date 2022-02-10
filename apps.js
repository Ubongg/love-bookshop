window.addEventListener('scroll', function () {
  const header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
});

function togglebtn(){
  const togglebtn = document.querySelector('.togglebtn');
  const nav = document.querySelector('.nav');
  togglebtn.classList.toggle('active');
  nav.classList.toggle('active');
}

const btn = document.querySelector('#btn');
const btnn = document.querySelector('#btnn');
const one = document.querySelector('#i');
const two = document.querySelector('#ii');
const three = document.querySelector('#iii');
const four = document.querySelector('#iv');
const five = document.querySelector('#v');
const six = document.querySelector('#vi');

btn.addEventListener('click', e=>{
  e.preventDefault();
  one.style.display = 'block';
  two.style.display = 'block';
  three.style.display = 'block';
  four.style.display = 'block';
  five.style.display = 'block';
  six.style.display = 'block';
  btn.style.display = 'none';
  btnn.style.display = 'block';
});

btnn.addEventListener('click', e=>{
  e.preventDefault();
  one.style.display = 'none';
  two.style.display = 'none';
  three.style.display = 'none';
  four.style.display = 'none';
  five.style.display = 'none';
  six.style.display = 'none';
  btn.style.display = 'block';
  btnn.style.display = 'none';
});

