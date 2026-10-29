const b=document.querySelector('.menu-btn'),l=document.querySelector('.links');
b.onclick=()=>{l.classList.toggle('open');b.setAttribute('aria-expanded',l.classList.contains('open'))};
l.querySelectorAll('a').forEach(a=>a.onclick=()=>l.classList.remove('open'));
document.getElementById('y').textContent=new Date().getFullYear();
document.querySelectorAll('.tab').forEach(t=>t.onclick=()=>{const y=t.dataset.y;
document.querySelectorAll('.tab').forEach(x=>{x.classList.toggle('on',x===t);x.setAttribute('aria-selected',x===t)});
document.querySelectorAll('.panel').forEach(p=>p.classList.toggle('on',p.dataset.y===y))});
