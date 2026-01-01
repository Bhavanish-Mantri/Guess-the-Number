# Guess the Number 🎤

A voice-controlled number guessing game built using **HTML, CSS, and JavaScript**.  
Players speak a number into the microphone and receive real-time hints to guess the correct number between **1 and 100**.

---

## 🔗 Live Demo

👉 https://bhavanish-mantri.github.io/Guess-the-Number/

---

## ✨ Features

- 🎙️ Voice input using the Web Speech API  
- 🔢 Random number generation between 1 and 100  
- 📢 Instant feedback: **Go Higher** / **Go Lower**  
- 🔁 Play again option after correct guess  
- 🖼️ Custom background and microphone images  
- 📱 Responsive and clean user interface  

---

## 🛠️ Technologies Used

- **HTML5** – Structure of the application  
- **CSS3** – Styling, layout, background, and overlay  
- **JavaScript (Vanilla)** – Game logic and speech recognition  
- **Web Speech API** – Voice recognition  

---

## 📁 Project Structure
```
Guess-the-Number/
│
├── index.html
├── style.css
├── script.js
└── images/
├── mic.jpg
└── background.jpg
```

---

## ⚙️ How It Works

1. The application generates a random number between **1 and 100**  
2. The microphone listens for the spoken number  
3. Speech is converted into text and parsed as a number  
4. The app gives hints:
   - **Go Higher ⬆️**
   - **Go Lower ⬇️**
5. Once guessed correctly, the user can restart the game  

---

## 🌐 Browser Compatibility

Supported browsers:
- Google Chrome  
- Microsoft Edge  

⚠️ Speech recognition requires:
- HTTPS (GitHub Pages works)
- Microphone permission enabled  

Opening the project directly using `file:///` will not work.

---

## 📝 Notes

- Speak numbers clearly for better recognition  
- Works best in a quiet environment  
- Fully frontend-based (no backend or database)  

---

## 📄 License

This project is open-source and available for learning and personal use.
