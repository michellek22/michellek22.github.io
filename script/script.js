// Confirm script is running
console.log("Welcome to the Pancake Zone! 🥞");

// ========================
// 1. ALERT BUTTON
// ========================
document.getElementById("alertMe").onclick = function () {
  alert("Love and a dash of vanilla! 💛");
};

// ========================
// 2. HOVER BUTTON
// ========================
const hoverBtn = document.getElementById("hoverButton");

hoverBtn.onmouseover = function () {
  hoverBtn.style.background = "#d2b48c"; // Light brown (like batter)
};

hoverBtn.onmouseleave = function () {
  hoverBtn.style.background = "#ffb347"; // Syrupy gold
};

// ========================
// 3. INCREMENTING BUTTON + IF-ELSE
// ========================
let count = 0;

document.getElementById("buttonCounter").onclick = function () {
  count += 1;

  const counterText = document.getElementById("counter");
  counterText.innerHTML = "You've flipped " + count + " pancake" + (count === 1 ? "!" : "s!");

  // If-else: change text color based on even/odd
  if (count % 2 === 0) {
    counterText.style.color = "#d2691e"; // Golden brown (even)
  } else {
    counterText.style.color = "#6b4226"; // Chocolate chip brown (odd)
  }
};

// ========================
// 4. FOR LOOP (Pancake Tips)
// ========================
const container = document.getElementById("container");

const tips = [
  "🥞 Use fresh baking powder for fluffier pancakes!",
  "🔥 Keep your pan on medium heat.",
  "🧈 Butter makes everything better!",
  "⏲️ Flip when you see bubbles form.",
  "🍓 Top with fruit or syrup for extra joy!"
];

for (let i = 0; i < tips.length; i++) {
  const tip = document.createElement("p");
  tip.textContent = tips[i];
  tip.style.margin = "6px 0";
  container.appendChild(tip);
}