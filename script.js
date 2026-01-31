let messages = [
  "Are you sure?",
  "Really sure?",
  "Think again 😢",
  "Last chance!",
  "You’ll regret this 💔"
];

let messageIndex = 0;

function handleNoClick() {
  const noButton = document.querySelector(".no-btn");
  const yesButton = document.querySelector(".yes-btn");

  noButton.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;

  const currentSize = parseFloat(
    window.getComputedStyle(yesButton).fontSize
  );
  yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
  window.location.href = "yes.html";
}
