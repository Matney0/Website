// Inspect an email string and make sure it doesn't belong to a certain domain
// Ex: gmail.com

// Declarations

// Check if the email belongs to a certain domain
document.addEventListener("DOMContentLoaded", function() {
    let submitButton = document.querySelector("#submit-button");

    if (submitButton) {
        submitButton.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent form submission

            let emailAddress = document.getElementById("email");
            if (!emailAddress) {
                console.error("Email input element not found.");
                return;
            }

            if (emailAddress.value.includes("gmail.com")) {
                alert("Emails from gmail.com are not allowed.");
                return;
            } else if (emailAddress.value.includes("yahoo.com")) {
                alert("Emails from yahoo.com are not allowed.");
                return;
            }

            // Open a new browser tab
            openNewBrowserTab();
        });
    }

    function openNewBrowserTab() {
        alert("Congratulations! The store will get back with you shortly.");
        window.open("https://www.example.com", "_blank");
    }
});
