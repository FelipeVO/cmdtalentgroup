// Contacto

const btn = document.getElementById('button');

// document.getElementById('form')
//  .addEventListener('submit', function(event) {
//    event.preventDefault();

//    btn.value = 'Enviando...';

//    const serviceID = 'default_service';
//    const templateID = 'template_4dp9szl';

//    emailjs.sendForm(serviceID, templateID, this)
//     .then(() => {
//       btn.value = 'Send Email';
//       alert('Enviado!');
//     }, (err) => {
//       btn.value = 'Send Email';
//       alert(JSON.stringify(err));
//     });
// });

//NavBar

addEventListener('DOMContentLoaded', () => {
    const btn_menu = document.querySelector('.btn_menu')
    if (btn_menu) {
        btn_menu.addEventListener('click', () => {
            const nav_menu = document.querySelector('.nav_menu')
            nav_menu.classList.toggle('show')
        })
    }
})


 addEventListener('DOMContentLoaded', () => {
  const nav_link = document.querySelector('.nav_link')
  if (nav_link) {
     nav_link.addEventListener('click', () => {
         const nav_menu = document.querySelector('.nav_menu')
         nav_menu.classList.toggle('show')
     })
  }
 })

 addEventListener('DOMContentLoaded', () => {
  const jvs1 = document.querySelector('.jvs1')
  if (jvs1) {
     jvs1.addEventListener('click', () => {
         const nav_menu = document.querySelector('.nav_menu')
         nav_menu.classList.toggle('show')
     })
  }
 })

 addEventListener('DOMContentLoaded', () => {
  const jvs2 = document.querySelector('.jvs2')
  if (jvs2) {
     jvs2.addEventListener('click', () => {
         const nav_menu = document.querySelector('.nav_menu')
         nav_menu.classList.toggle('show')
     })
  }
 })



const navigationHeight = document.querySelector(".navbar")
  .offsetHeight;

document.documentElement.style.setProperty(
  "--scroll-padding",
  navigationHeight + "px"
);

// Animacion

// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//       console.log(entry)
//       if (entry.isIntersecting) {
//           entry.target.classList.add('show');
//       }
//     });
// });

// const hiddenElements = document.querySelectorAll('.hidden');
// hiddenElements.forEach((el) => observer.observe(el));


const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
        entry.target.classList.add('show');
    } else {
        entry.target.classList.remove('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));