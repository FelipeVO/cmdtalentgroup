// Navbar

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

addEventListener('DOMContentLoaded', () => {
const jvs3 = document.querySelector('.jvs3')
if (jvs3) {
    jvs3.addEventListener('click', () => {
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