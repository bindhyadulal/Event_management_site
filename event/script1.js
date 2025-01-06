document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var guests = document.getElementById("guests").value;
    var eventDate = document.getElementById("eventDate").value;

    // Simulate booking process (replace this with your backend logic)
    setTimeout(function() {
        // Clear form fields
        document.getElementById("bookingForm").reset();

        // Show confirmation message
        document.getElementById("confirmationMessage").style.display = "block";
    }, 1000); // Simulate 1 second delay for booking process
});
