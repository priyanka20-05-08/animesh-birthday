// start button
function start() {
  document.getElementById("music").play();
  next(2);
}

// screen change
function next(n) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById("screen" + n).classList.add("active");
}

// swipe
let touched = false;

document.addEventListener("touchstart", () => touched = true);

document.addEventListener("touchmove", () => {
  if (touched) {
    next(3);
    hearts();
    fireworks();
    touched = false;
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

// slideshow
let photos = ["photo1.jpg", "photo2.jpg", "photo3.jpg"];
let i = 0;

setInterval(() => {
  i = (i + 1) % photos.length;
  document.getElementById("slide").src = photos[i];
}, 2000);
