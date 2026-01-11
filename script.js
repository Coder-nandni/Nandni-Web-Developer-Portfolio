/* ===============================
   HAMBURGER MENU
   =============================== */
function toggleMenu(){
  document.getElementById("menu").classList.toggle("show");
}

document.querySelectorAll("#menu a").forEach(link=>{
  link.addEventListener("click",()=>{
    document.getElementById("menu").classList.remove("show");
  });
});

function closeMenu(){
  document.getElementById("menu").classList.remove("show");
}

/* ===============================
   SCROLL REVEAL ANIMATION
   =============================== */
const reveals = document.querySelectorAll(".section, .card, .project-card");

function revealOnScroll(){
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if(top < windowHeight - 120){
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

/* ===============================
   SKILL BAR ANIMATION (ONCE)
   =============================== */
const skillBars = document.querySelectorAll(".fill");
let skillsPlayed = false;

function animateSkills(){
  const skillsSection = document.getElementById("skills");
  if(!skillsSection) return;

  const top = skillsSection.getBoundingClientRect().top;

  if(top < window.innerHeight - 150 && !skillsPlayed){
    skillBars.forEach(bar => bar.classList.add("active"));
    skillsPlayed = true;
  }
}

window.addEventListener("scroll", animateSkills);
function sendWhatsApp(e) {
  e.preventDefault();

  let name = document.querySelector('input[placeholder="Your Name"]').value;
  let email = document.querySelector('input[placeholder="Your Email"]').value;
  let message = document.querySelector('textarea').value;

  let phoneNumber = "918198837746";

  let text = `Hello Nandni,%0A%0AName: ${name}%0AEmail: ${email}%0AMessage: ${message}`;

  let url = `https://wa.me/${phoneNumber}?text=${text}`;
  window.open(url, "_blank");
}


/* ===============================
   PRELOADER
   =============================== */
window.addEventListener("load", () => {
  const loader = document.getElementById("preloader");
  if(loader){
    loader.style.display = "none";
  }
});
