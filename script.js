function next(n) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById("screen" + n).classList.add("active");

  if (n === 4) {
    typeText();
  }
}

// 👉 Cake swipe
let startX = 0;

document.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

document.addEventListener("touchend", (e) => {
  let endX = e.changedTouches[0].clientX;

  if (Math.abs(startX - endX) > 50) {
    let screen2 = document.getElementById("screen2");

    if (screen2.classList.contains("active")) {
      next(3);
    }
  }
});

// 👉 Candle tap
document.addEventListener("click", () => {
  let screen3 = document.getElementById("screen3");

  if (screen3.classList.contains("active")) {
    document.getElementById("candle").innerHTML = "💨";
    setTimeout(() => next(4), 1000);
  }
});

// 👉 Typing message
let message = `Happy Birthday Animesh da 🎉

Aajke phone korte iccha chilo, 
kintu bhablam hoyto disturb hoye jabe 
because goto 2 din jokhon call korlam
tokhon tomar kotha sune mone hochilo je 
tomar kotha bolar iche nei tai message e wish korlam …

Birthday treat ta o kintu Durga Puja te nebo 😌🎁

Sob somoy nijer moto thako, aar onek khusi theko ❤️`;

let i = 0;

function typeText() {
  let target = document.getElementById("typing");

  function typing() {
    if (i < message.length) {
      target.innerHTML += message.charAt(i);
      i++;
      setTimeout(typing, 40);
    }
  }

  typing();
}
