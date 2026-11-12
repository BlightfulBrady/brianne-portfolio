const menu=document.querySelector('.menu'),nav=document.querySelector('.nav nav');

menu.addEventListener('click',()=>nav.classList.toggle('open'));

document.querySelectorAll('.nav nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

document.getElementById('year').textContent=new Date().getFullYear();

document.querySelectorAll('.socials a').forEach(a=>a.addEventListener('click',e=>{
  if(a.getAttribute('href')==='#')
    e.preventDefault()
}));

document.getElementById('contactForm').addEventListener('submit',e=>{
  e.preventDefault();
  const f=new FormData(e.currentTarget),subject=encodeURIComponent(`Website inquiry — ${f.get('interest')}`),body=encodeURIComponent(`Hi Bri-Anne,\\n\\n${f.get('message')}\\n\\nFrom: ${f.get('name')}\\nEmail: ${f.get('email')}\\nInterest: ${f.get('interest')}`);
  window.location.href=`mailto:brp658@gmail.com?subject=${subject}&body=${body}`
});
