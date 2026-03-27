// ⏳ Loading → auto next
setTimeout(() => {
  document.getElementById("loading").classList.remove("active");
  document.getElementById("screen1").classList.add("active");
}, 2000);

function next(n) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById("screen" + n).classList.add("active");

  if (n === 4) {
    typeText();
    hearts();
    fireworks();
  }
}

// 👉 Swipe cake
let startX = 0;

document.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

document.addEventListener("touchend", (e) => {
  let endX = e.changedTouches[0].clientX;

  if (Math.abs(startX - endX) > 50) {
    if (document.getElementById("screen2").classList.contains("active")) {
      next(3);
    }
  }
});

// 👉 Candle tap
document.addEventListener("click", () => {
  if (document.getElementById("screen3").classList.contains("active")) {
    document.getElementById("candle").innerHTML = "💨";
    setTimeout(() => next(4), 1000);
  }
});

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

// ✍️ typing
let message = `Happy Birthday Animesh da 🎉

Aajke phone korte iccha chilo, 
kintu bhablam hoyto disturb hoye jabe
because goto 2 din jokhon phone korlam 
tokhon tomar kotha sune mone hochilo je 
tomar kotha bolar iche nei 
tai message e wish korlam 😔

Birthday treat ta o kintu Durga Puja te nebo 😌🎁

Stay happy, stay blessed…
God bless you always 💖❤️`;

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

// 📸 slideshow
let photos = [
"Screenshot_20260327_134939_Facebook.jpg",
"Screenshot_20260327_135051_Lite.jpg"
];

let j = 0;

setInterval(() => {
  let slide = document.getElementById("slide");
  if (slide) {
    j = (j + 1) % photos.length;
    slide.src = photos[j];
  }
}, 2000);
