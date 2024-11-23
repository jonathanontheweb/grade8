let studentCode = "";  // This will store the student's code

function setup() {
    createCanvas(800, 600);  // Set the canvas size
    noLoop();  // Ensure `draw()` is only called once unless manually triggered
}

// The `draw()` function is automatically called by p5.js, but we will run student's code inside it
function draw() {
    background(255);  // Set a white background

    // Dynamically run the student's code
    try {
        eval(studentCode);  // Inject student code into the `draw()` function
    } catch (err) {
        console.error("Error in student code:", err);  // Log errors in the student's code
    }
}

// Function to update the student's code and trigger the drawing again
function updateStudentCode() {
    const code = document.getElementById("student-code").value;  // Get code from textarea
    studentCode = code;  // Store it in the global variable
    redraw();  // Trigger a re-draw to apply the new student code
}
