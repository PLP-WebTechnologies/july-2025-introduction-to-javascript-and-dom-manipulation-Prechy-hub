// ===============================
// Part 1: Variables & Conditionals
// ===============================
let age = 20;
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

// ===============================
// Part 2: Functions
// ===============================
function addNumbers(a, b) {
  return a + b;
}
console.log("Sum:", addNumbers(5, 7));

function formatName(name) {
  return name.toUpperCase();
}
console.log("Formatted Name:", formatName("Prechy"));

// ===============================
// Part 3: Loops
// ===============================
// Example 1: Loop through an array
let fruits = ["Apple", "Banana", "Cherry"];
fruits.forEach(fruit => console.log(fruit));

// Example 2: Countdown
function countdown(n) {
  for (let i = n; i >= 0; i--) {
    console.log(i);
  }
}
countdown(5);

// ===============================
// Part 4: DOM Manipulation
// ===============================
// 1. Toggle text visibility
document.getElementById("toggleBtn").addEventListener("click", () => {
  document.getElementById("text").classList.toggle("hidden");
});

// 2. Countdown on button click
document.getElementById("countBtn").addEventListener("click", () => {
  let counter = 5;
  let display = document.getElementById("countDisplay");

  let interval = setInterval(() => {
    display.textContent = counter;
    counter--;
    if (counter < 0) clearInterval(interval);
  }, 1000);
});

// 3. Change content dynamically
document.body.insertAdjacentHTML("beforeend", "<p>New paragraph added with JS!</p>");
