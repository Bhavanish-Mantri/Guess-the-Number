const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

if (!SpeechRecognition) {
  document.body.innerHTML = `
    <h2>Your browser does not support Speech Recognition</h2>
    <p>Please use Chrome or Edge</p>
  `;
} else {
  const msg = document.getElementById("msg");
  const randomNumber = Math.floor(Math.random() * 100) + 1;

  const recognition = new SpeechRecognition();
  recognition.lang = "en-US";
  recognition.start();

  function onSpeak(e) {
    const spokenNumber = e.results[0][0].transcript;
    showMessage(spokenNumber);
    checkNumber(spokenNumber);
  }

  function showMessage(message) {
    msg.innerHTML = `
      <div>You said:</div>
      <span class="box">${message}</span>
    `;
  }

  function checkNumber(message) {
    const number = +message;

    if (Number.isNaN(number)) {
      msg.innerHTML += "<div>That is not a valid number</div>";
      return;
    }

    if (number < 1 || number > 100) {
      msg.innerHTML += "<div>Number must be between 1 and 100</div>";
      return;
    }

    if (number === randomNumber) {
      document.body.innerHTML = `
        <h2> Congrats! You guessed the number!<br><br>
        It was ${number}</h2>
        <button class="play-again" id="play-again">Play Again</button>
      `;
    } else if (number > randomNumber) {
      msg.innerHTML += "<div>GO LOWER ! </div>";
    } else {
      msg.innerHTML += "<div>GO HIGHER !</div>";
    }
  }

  recognition.addEventListener("result", onSpeak);
  recognition.addEventListener("end", () => recognition.start());

  document.body.addEventListener("click", (e) => {
    if (e.target.id === "play-again") {
      location.reload();
    }
  });
}
