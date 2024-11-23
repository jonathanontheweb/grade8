let studentCode = ""; // Placeholder for students' code

function setup() {
    createCanvas(800, 600); // Create the canvas
    noLoop(); // Ensure `draw()` only runs once unless explicitly called
}

function draw() {
    background(255); // Default white background
    try {
        eval(studentCode); // Dynamically execute the students' code
    } catch (err) {
        console.error("Error in student code:", err); // Log errors to console
    }
}

// Function to update the student's code dynamically
function updateStudentCode(newCode) {
    studentCode = newCode; // Update the studentCode variable
    redraw(); // Redraw the canvas to reflect the new code
}
