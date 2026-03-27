// screen change
function next(n) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById("screen" + n).classList.add("active");

  if (n === 3) {
    typeText();
    hearts();
    fireworks();
  }
}

// 🎁 gift open
function openGift() {
  document.querySelector(".gift").innerHTML = "🎉";
  setTimeout(() => {
    next(3);
  }, 1000);
}

// ❤️ hearts
function hearts() {
  setInterval(() => {
    let h = document.createElement("div");
    h.className = "heart";
    h.innerHTML = "❤️";
    h.style.left = Math.random() * 100 + "vw";
    h.style.top = "100vh";
    document.body.appendChild(h);
    setTimeout(() => h.remove(), 4000);
  }, 300);
}

// 🎆 fireworks
function fireworks() {
  setInterval(() => {
    let f = document.createElement("div");
    f.className = "fire";
    f.innerHTML = "✨";
    f.style.left = Math.random() * 100 + "vw";
    f.style.top = Math.random() * 100 + "vh";
    document.body.appendChild(f);
    setTimeout(() => f.remove(), 1000);
  }, 200);
}

// ✨ typing effect
let message = `Happy Birthday Animesh da 🎉

Aajke phone korte iccha chilo, kintu bhablam hoyto disturb hoye jabe…
because goto 2 bar jokhon phone korlam tokhon tomar kotha sune mone hochilo je tomar kotha bolar iche nei tai message e wish korlam.😊

Sob somoy nijer moto thako, aar onek khusi theko ❤️`;

let i = 0;

function typeText() {
  let speed = 40;
  let target = document.getElementById("typing");

  function typing() {
    if (i < message.length) {
      target.innerHTML += message.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }

  typing();
}

// slideshow
let photos = [
"Screenshot_20260327_134939_Facebook.jpg",
"Screenshot_20260327_135051_Lite.jpg"
];

let j = 0;

setInterval(() => {
  j = (j + 1) % photos.length;
  document.getElementById("slide").src = photos[j];
}, 2000);
