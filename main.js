const b=document.querySelector('.menu-btn'),l=document.querySelector('.links');
b.onclick=()=>{l.classList.toggle('open');b.setAttribute('aria-expanded',l.classList.contains('open'))};
l.querySelectorAll('a').forEach(a=>a.onclick=()=>l.classList.remove('open'));
document.getElementById('y').textContent=new Date().getFullYear();
