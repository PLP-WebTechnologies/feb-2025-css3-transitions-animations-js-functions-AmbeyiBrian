// Grab elements from the DOM
const animateButton = document.getElementById("animateButton");
const animatedBox = document.getElementById("animatedBox");
const colorInput = document.getElementById("colorInput");

// Function to trigger animation
function triggerAnimation() {
    animatedBox.style.animation = "animateBox 1s ease-in-out";
    
    // Reset animation after it's completed
    animatedBox.addEventListener("animationend", () => {
        animatedBox.style.animation = "none";
    });
}

// Event listener for the button click to trigger animation
animateButton.addEventListener("click", triggerAnimation);

// Load stored color from localStorage and apply it
if (localStorage.getItem("backgroundColor")) {
    document.body.style.backgroundColor = localStorage.getItem("backgroundColor");
    colorInput.value = localStorage.getItem("backgroundColor");
}

// Save the selected color to localStorage
colorInput.addEventListener("input", function () {
    const selectedColor = colorInput.value;
    document.body.style.backgroundColor = selectedColor;
    localStorage.setItem("backgroundColor", selectedColor);
});
