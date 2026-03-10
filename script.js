const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.2 }
);

sections.forEach((sec) => {
  sec.style.opacity = 0;
  sec.style.transform = "translateY(20px)";
  sec.style.transition = "all 0.6s ease-out";
  observer.observe(sec);
});

function handleSubmit(e) {
  e.preventDefault();
  alert("Thanks for reaching out! I’ll get back to you soon.");
}
// Modal profile image click
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const close = document.querySelector(".close");
const profileImg = document.querySelector(".profile-img");

profileImg.addEventListener("click", () => {
  modal.style.display = "block";
  modalImg.src = profileImg.src;
});

close.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
