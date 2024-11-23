// This will load the p5.js library
(function() {
  var script = document.createElement('script');
  script.src = "https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.js";
  script.onload = function() {
    setupCanvas();  // Call setup function after p5.js is loaded
  };
  document.head.appendChild(script);
})();

// Custom code for handling student input
function setupCanvas() {
  function setup() {
    createCanvas(800, 600); // Canvas initialization
    noLoop(); // Ensures `draw()` runs only once unless `redraw()` is called
  }

  function draw() {
    background(255);  // Set a default background
    try {
      // Dynamically inject the student's code
      let studentCode = document.getElementById("student-code").value;
      eval(studentCode);  // Run the student's code inside p5.js
    } catch (err) {
      console.error("Error in student code:", err);
    }
  }

  // Function to update student code and trigger redrawing
  window.updateStudentCode = function() {
    redraw();  // Trigger a re-draw to apply new student code
  }
}
