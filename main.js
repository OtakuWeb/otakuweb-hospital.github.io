//PRELOADER
const preloader = document.querySelector("[data-preaload]");
window.addEventListener("load", function (){
    preloader.classList.add("loaded");
    document.body.classList.add("loaded");
});

//NAVBAR ANIMATION

window.addEventListener("scroll", () => {
    document.querySelector("nav").classList.toggle("window-scroll", window.scrollY > 100)
})

//NAV--CLICK// HIDE

let menu = document.querySelector(".nav_menu");
let menuBtn = document.querySelector("#open-menu-btn");
let closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener("click", () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})

let closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display ="none";
    menuBtn.style.display = "inline-block";    
}

closeBtn.addEventListener("click",(closeNav))

//FAQ
let faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
    faq.addEventListener("click", () =>{
        faq.classList.toggle("open");
    })
});

/*top*/
const backTopBtn = document.querySelector("[data-back-top-btn]");
const nav = document.querySelector(".nav");


let lastScrollPos = 0;

window.addEventListener("scroll", function (){
    if(this.window.scrollY > 50){
       
        backTopBtn.classList.add("active");
        nav.style.backgroundColor = "#fff";
    }else{
        
        backTopBtn.classList.remove("active");
    }
});

/*SCROLL EFFECT */
window.addEventListener("scroll", reveal);

function reveal(){
  let reveals = document.querySelectorAll(".reveal");
    for(let i = 0; i < reveals.length; i++){
      
      let windowheight = window.innerHeight;
      let revealtop = reveals[i].getBoundingClientRect().top;
      let revealpoint = 70;

      if(revealtop < windowheight - revealpoint){
          reveals[i].classList.add("active");
      }else{
          reveals[i].classList.remove("active");
      }
  }
};