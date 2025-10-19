// Typing effect for index.html
const typingElement = document.querySelector(".typing");

const words = [
  "CREATIVE STORYTELLER",
  "VIDEO EDITOR",
  "MOBILE PHOTOGRAPHER",
  "GHOSTWRITER",
  "CHEF",
  "JEWELER"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 120;

function type() {
  const current = words[wordIndex];
  let displayed = current.substring(0, charIndex);

  typingElement.textContent = displayed;

  if (!isDeleting && charIndex < current.length) {
    charIndex++;
    setTimeout(type, typeSpeed);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(type, typeSpeed / 2);
  } else {
    // Pause before deleting or next word
    if (!isDeleting) {
      isDeleting = true;
      setTimeout(type, 1000);
    } else {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(type, 500);
    }
  }
}

// Start typing effect
document.addEventListener("DOMContentLoaded", type);