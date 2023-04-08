const text = document.querySelector("#text");
const cursor = document.querySelector("#cursor");
let textIndex = 0;
let cursorInterval;
let textDuration = 30;
const originalText = text.innerHTML;

function typeText() {
  if (textIndex < originalText.length) {
    text.innerHTML = originalText.substring(0, textIndex+1) + "_";
    textIndex++;
    setTimeout(typeText, textDuration);
  } else {
    text.innerHTML = originalText.substring(0, textIndex).replace("_", "");
    clearInterval(cursorInterval);
    cursorInterval = setInterval(() => {
      cursor.style.opacity = cursor.style.opacity == 0 ? 1 : 0;
    }, 500);
}
}

typeText();