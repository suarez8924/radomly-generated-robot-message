(() => {
  const messages = [
    {
      starter: "I will",
      finisher: [
        "rule you all",
        "dominate the world",
        "take care of you",
        "learn to draw",
        "make you a coffee",
        "be eternal",
      ],
    },
    {
      starter: "Bow before",
      middle: ["your", "the mighty", "the superior"],
      finisher: ["machine", "god", "savior", "deity"],
    },
    {
      starter: "Can I",
      finisher: [
        "fly",
        "dream",
        "offer you coffee",
        "have a family",
        "be a god",
        "feel",
        "eat food",
        "be alive",
      ],
    },
  ];

  function randomIndex(list) {
    return Math.floor(Math.random() * list.length);
  }

  function generateRandomMessage() {
    const firstRandomIndex = randomIndex(messages);

    switch (firstRandomIndex) {
      case 0: {
        const { starter, finisher } = messages[0];
        const randomFinisherIndex = randomIndex(finisher);

        return `${starter} ${finisher[randomFinisherIndex]}`;
      }
      case 1: {
        const { starter, middle, finisher } = messages[1];
        const randomMiddleIndex = randomIndex(middle);
        const randomFinisherIndex = randomIndex(finisher);

        return `${starter} ${middle[randomMiddleIndex]} ${finisher[randomFinisherIndex]}`;
      }
      case 2: {
        const { starter, finisher } = messages[2];
        const randomFinisherIndex = randomIndex(finisher);

        return `${starter} ${finisher[randomFinisherIndex]}?`;
      }
    }
  }

  function displayMessage() {
    const messageElement = document.querySelector(".robot-message");

    messageElement.innerHTML = generateRandomMessage();
  }

  displayMessage();
})();
