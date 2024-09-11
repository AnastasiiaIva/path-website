function toggleMenu() {
  const menu = document.querySelector(".navbar-menu");
  const burgerIcon = document.querySelector(".burger-menu"); // Find the burger menu item

  menu.classList.toggle("active"); // Opens or closes the menu
  burgerIcon.classList.toggle("change"); // Turns the burger menu into a cross
}

console.log("Pagina cargada");

// Bookmarks
document.addEventListener("DOMContentLoaded", () => {
  const btnGetDailyMissions = document.querySelector(".btn-orange");
  const btnAcceptChallenges = document.querySelector(".btn-blue");
  const btnImproveLife = document.querySelector(".btn-pink");
  const blueBlock = document.getElementById("blue-block");
  const faqSection = document.getElementById("faq-section");
  const benefitQuestion = document.getElementById("benefit-question");
  const card = document.getElementById("card");

  btnGetDailyMissions.addEventListener("click", (event) => {
    event.preventDefault();
    card.scrollIntoView({ behavior: "smooth" });
  });

  btnAcceptChallenges.addEventListener("click", (event) => {
    event.preventDefault();
    blueBlock.scrollIntoView({ behavior: "smooth" });
  });

  btnImproveLife.addEventListener("click", (event) => {
    event.preventDefault();
    faqSection.scrollIntoView({ behavior: "smooth" });

    // Toggle FAQ answer for "How do the challenges benefit me?"
    const faqItem = benefitQuestion.parentElement;
    const isOpen = faqItem.classList.contains("open");

    // Close all FAQ items
    document.querySelectorAll(".faq-item").forEach((item) => {
      item.classList.remove("open");
      item.querySelector(".faq-answer").style.display = "none";
    });

    if (!isOpen) {
      faqItem.classList.add("open");
      faqItem.querySelector(".faq-answer").style.display = "block";
    }
  });
});

//Card//
document.addEventListener("DOMContentLoaded", function () {
  const cards = [
    {
      image:
        "https://raw.githubusercontent.com/AnastasiiaIva/path-website/main/assets/images/Image1.png",
      text: "Don’t use any transport today (only walk)",
      missionText:
        "Walking increases your cardiovascular fitness, strengthens muscles, and improves mood. Science shows that just 30 minutes of walking daily can reduce the risk of heart disease.",
      challengeText:
        "Walking increases your cardiovascular fitness, strengthens muscles, and improves mood. Science shows that just 30 minutes of walking daily can reduce the risk of heart disease.",
      lifeText:
        "Walking increases your cardiovascular fitness, strengthens muscles, and improves mood. Science shows that just 30 minutes of walking daily can reduce the risk of heart disease.",
    },
    {
      image:
        "https://raw.githubusercontent.com/AnastasiiaIva/path-website/main/assets/images/Image2.png",
      text: "Plant a Tree or a Plant",
      missionText:
        "Gardening is a great moderate exercise that improves strength, flexibility, and mood. Science shows it reduces stress and boosts immune function.",
      challengeText:
        "Trees absorb carbon dioxide and release oxygen, combating climate change, improving air quality, and supporting biodiversity.",
      lifeText:
        "Planting fosters a sense of accomplishment and connection to nature. Research indicates it enhances mental well-being and life satisfaction.",
    },
    {
      image:
        "https://raw.githubusercontent.com/AnastasiiaIva/path-website/main/assets/images/Image3.png",
      text: "Declutter and Donate",
      missionText:
        "A tidy space reduces anxiety, improves focus, and enhances mental well-being. Plus, decluttering encourages physical activity, boosting cardiovascular health.",
      challengeText:
        "Donating items helps reduce waste and the demand for new products. Reusing and recycling conserve resources and decrease landfill waste.",
      lifeText:
        "Donating fosters community and purpose, enhancing personal happiness and social connections. A clutter-free space also boosts productivity and creativity.",
    },
  ];

  let currentIndex = 0;
  let autoSwitchInterval;
  let isFlipping = false;
  let autoSwitchEnabled = true;
  let isInState1 = true; // Додано для перевірки стану картки

  const cardContainer = document.querySelector(".card-container");
  const cardImage = document.querySelector(".card-upper img");
  const cardText = document.querySelector(".card-lower p");
  const missionText = document.querySelector("#mission-text");
  const challengeText = document.querySelector("#challenge-text");
  const lifeText = document.querySelector("#life-text");
  const dots = document.querySelectorAll(".dot");

  function updateCard(index) {
    cardImage.src = cards[index].image;
    cardText.textContent = cards[index].text;
    missionText.textContent = cards[index].missionText;
    challengeText.textContent = cards[index].challengeText;
    lifeText.textContent = cards[index].lifeText;
    dots.forEach((dot) => dot.classList.remove("active"));
    dots[index].classList.add("active");
  }

  function startAutoSwitch() {
    if (!autoSwitchEnabled) return;
    autoSwitchInterval = setInterval(nextCard, 5000);
  }

  function stopAutoSwitch() {
    clearInterval(autoSwitchInterval);
  }

  function nextCard() {
    if (isFlipping || !isInState1) return; // Додано перевірку стану картки

    cardContainer.classList.add("animate");
    currentIndex = (currentIndex + 1) % cards.length;

    setTimeout(() => {
      updateCard(currentIndex);
      cardContainer.classList.remove("animate");
    }, 800);
  }

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      if (index !== currentIndex && isInState1) {
        stopAutoSwitch();
        currentIndex = index;
        updateCard(currentIndex);
        startAutoSwitch();
      }
    });
  });

  startAutoSwitch();

  console.log(document.querySelectorAll(".help-btn"));

  document.querySelectorAll(".help-btn").forEach((button) => {
    console.log("boton");
    button.addEventListener("click", function () {
      if (isFlipping) return;

      const card = button.closest(".card");
      const cardInner = card.querySelector(".card-inner");

      if (button.textContent.trim() === "?") {
        autoSwitchEnabled = false;
        isInState1 = false; // Перемикає картку в стан 2
      } else if (button.textContent.trim() === "Х") {
        isInState1 = true; // Повертає картку в стан 1
        autoSwitchEnabled = true;
        startAutoSwitch(); // Відновлює автоматичне перемикання
      }

      isFlipping = true;

      card.classList.toggle("flipped");

      cardInner.addEventListener(
        "transitionend",
        function () {
          isFlipping = false;

          if (cardInner.classList.contains("flipped")) {
            return;
          }

          if (isInState1) {
            startAutoSwitch();
          }
        },
        { once: true }
      );
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const questions = document.querySelectorAll(".faq-question");

  questions.forEach((question) => {
    question.addEventListener("click", function () {
      const faqItem = this.parentElement;
      const answer = this.nextElementSibling;
      const isVisible = answer.style.display === "block";

      // Close all answers and reset arrow rotation
      document.querySelectorAll(".faq-item").forEach((item) => {
        item.classList.remove("open");
        item.querySelector(".faq-answer").style.display = "none";
        item.querySelector(".arrow").style.transform =
          "translateY(-50%) rotate(0deg)";
      });

      // If the clicked question's answer is not visible, show it
      if (!isVisible) {
        faqItem.classList.add("open");
        answer.style.display = "block";
        this.querySelector(".arrow").style.transform =
          "translateY(-50%) rotate(90deg)";
      }
    });
  });
});
