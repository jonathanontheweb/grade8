function setup() {
    createCanvas(500, 500); // Canvas initialization
    noLoop(); // Ensures `draw()` runs once unless animation is needed
}

function draw() {
    try {
        let studentCode = document.getElementById("student-code").value;
        eval(studentCode); // Dynamically run the student's code
    } catch (err) {
        console.error("Error in student code:", err);
    }
}

function runCode() {
    redraw(); // Triggers `draw()` again to re-render the canvas
}
