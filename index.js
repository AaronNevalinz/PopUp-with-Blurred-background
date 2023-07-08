const blur = document.querySelector('#blur');
const btn = document.querySelector('#btn');
const popup = document.querySelector('#popup');

btn.addEventListener('click', ()=>{
    blur.classList.toggle('active');
    popup.classList.toggle('active');    
});

const btnClear = document.querySelector('#btn-clear');

btnClear.addEventListener('click', ()=>{
    popup.classList.remove('active');
    blur.classList.remove('active')
});