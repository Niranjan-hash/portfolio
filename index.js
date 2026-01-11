
gsap.registerPlugin(ScrollTrigger, TextPlugin);

// Hero animation
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".home",
    start: "top bottom",
    end: "bottom 20%",
    toggleActions: "play reverse play reverse",
  }
});

tl
   .fromTo(".span2", { x: -300, opacity: 0 }, { x: 0, opacity: 1 })
  .fromTo(".span3", { x: 400, opacity: 0 }, { x: 0, opacity: 1 }, "-=0.1")
  .fromTo(".home p", { opacity: 0, y: 40 }, { opacity: 1, y: 0 }, "-=0.3")
  .fromTo(".nav li", { y: 50, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.1 }, "-=0.6");

// Typing animation for code-editor - FIXED
const codeLines = [
  "Hello! My name is Niranjan, and I’m passionate about crafting engaging, interactive, and meaningful experiences on the web.My journey into web development began a few years ago when I started exploring how websites actually worked — what started as curiosity quickly turned into a deep love for building things with HTML, CSS, and JavaScript.","Since then, I’ve had the opportunity to work on several personal and collaborative projects, learning everything from designing smooth front-end interfaces to developing powerful back-end systems with Node.js and Express. My main focus these days is creating clean, responsive, and user-friendly applications using the MERN Stack.I’m always excited about learning new technologies and improving my craft — whether it’s enhancing animations with GSAP, experimenting with React Hooks, or exploring cloud integrations for full-stack apps."
]

const codeTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".code-editor",
    start: "top 80%",
    toggleActions: "play reverse play reverse"
  }
});

codeLines.forEach((line, i) => {
  codeTimeline.to(`.code-line${i+1}`, {
    text: line,
    duration: line.length * 0.01,
    ease: "none"
  }, i > 0 ? "+=0.3" : 0);
});


 const skillsTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".skills-content",
      start: "top 80%",
      toggleActions: "play reverse play reverse",
    }
  });

  skillsTl.from(".skills", { x: -200, opacity: 0, duration: 1.2, ease: "power3.out" })
        .from(".tools", { x: 200, opacity: 0, duration: 1.2, ease: "power3.out" }, "-=0.8")

// PROJECT SLIDER — CLEAN VERSION
const pprojectTl = document.querySelector('.grid-container')
// Select elements only once
const projectTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".grid-container",
    start: "top 80%",
    toggleActions: "play reverse play reverse",
  }
});

projectTl.from(".grid-container > div", {
  y: 100,
  opacity: 0,
  stagger: 0.2,
  duration: 0.8,
  ease: "power3.out"
});
const form_i = document.querySelector('.list-5')
const form =document.querySelector('.form')
form_i.addEventListener('click',(e)=>{
 form.style.display="flex"
  e.preventDefault()
})
const btn  = document.getElementById('btn')
btn.addEventListener('click',(e)=>{
  e.preventDefault()
  form.style.display="none"
})
const x = document.querySelector('.x')
x.addEventListener('click',()=>{
 form.style.display="none"
})