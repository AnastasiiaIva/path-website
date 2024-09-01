function toggleMenu() {
  const menu = document.querySelector(".navbar-menu");
  const burgerIcon = document.querySelector(".burger-menu"); // Find the burger menu item

  menu.classList.toggle("active"); // Opens or closes the menu
  burgerIcon.classList.toggle("change"); // Turns the burger menu into a cross
}

//Card//
document.addEventListener("DOMContentLoaded", function () {
  const cards = [
    {
      image:
        "https://raw.githubusercontent.com/AnastasiiaIva/path-website/main/assets/images/Image1.png",
      text: "Don’t use any transport today (only walk)",
      backText: "More details about card 1",
    },
    {
      image:
        "https://raw.githubusercontent.com/AnastasiiaIva/path-website/main/assets/images/Image2.png",
      text: "Plant a Tree or a Plant",
      backText: "More details about card 2",
    },
    {
      image:
        "https://raw.githubusercontent.com/AnastasiiaIva/path-website/main/assets/images/Image3.png",
      text: "Declutter and Donate",
      backText: "More details about card 3",
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
  const backText = document.querySelector(".card-back p");
  const dots = document.querySelectorAll(".dot");

  function updateCard(index) {
    cardImage.src = cards[index].image;
    cardText.textContent = cards[index].text;
    backText.textContent = cards[index].backText;
    dots.forEach((dot) => dot.classList.remove("active"));
    dots[index].classList.add("active");
  }

  function startAutoSwitch() {
    if (!autoSwitchEnabled) return;
    autoSwitchInterval = setInterval(nextCard, 3000);
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

  document.querySelectorAll(".help-btn").forEach((button) => {
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
