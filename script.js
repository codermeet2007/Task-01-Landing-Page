const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const themeToggle = document.getElementById("themeToggle");
const tabs = document.querySelectorAll(".topic-tab");
const cards = document.querySelectorAll(".topic-card");
const meterFill = document.getElementById("meterFill");
const focusText = document.getElementById("focusText");
const quizButtons = document.querySelectorAll(".quiz-btn");
const quizResult = document.getElementById("quizResult");
const year = document.getElementById("year");

const topicMeta = {
  html: {
    width: "33%",
    message: "HTML focus: learn the structure of a webpage first."
  },
  css: {
    width: "66%",
    message: "CSS focus: learn how to style and arrange content beautifully."
  },
  java: {
    width: "100%",
    message: "Java focus: build strong programming and object-oriented skills."
  }
};

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const selectedTopic = tab.dataset.topic;

    tabs.forEach((item) => {
      const isActive = item === tab;
      item.classList.toggle("active", isActive);
      item.setAttribute("aria-selected", String(isActive));
    });

    cards.forEach((card) => {
      card.classList.toggle("active", card.dataset.card === selectedTopic);
    });

    meterFill.style.width = topicMeta[selectedTopic].width;
    focusText.textContent = topicMeta[selectedTopic].message;
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
  themeToggle.textContent = document.body.classList.contains("light-theme")
    ? "Use Dark Theme"
    : "Switch Theme";
});

quizButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const isCorrect = button.dataset.answer === "correct";
    quizResult.textContent = isCorrect
      ? "Correct! HTML is used to structure page content."
      : "Not quite. HTML is the language used to structure webpage content.";
    quizResult.classList.toggle("success", isCorrect);
    quizResult.classList.toggle("error", !isCorrect);
  });
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

year.textContent = new Date().getFullYear();
