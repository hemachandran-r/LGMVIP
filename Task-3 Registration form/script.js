document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.getElementById("registrationForm");
    const submittedDataDiv = document.getElementById("submittedData");

    registrationForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const fullName = document.getElementById("fullName").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const gender = document.getElementById("gender").value;
        const birthdate = document.getElementById("birthdate").value;
        const address = document.getElementById("address").value;

        // Create a new div element to display submitted data
        const dataDiv = document.createElement("div");
        dataDiv.classList.add("submitted-data");

        // Populate the div with the submitted data
        dataDiv.innerHTML = `
            <h2>Submitted Details:</h2>
            <p><strong>Full Name:</strong> ${fullName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Gender:</strong> ${gender}</p>
            <p><strong>Date of Birth:</strong> ${birthdate}</p>
            <p><strong>Address:</strong> ${address}</p>
        `;

        // Append the dataDiv to the submittedDataDiv
        submittedDataDiv.appendChild(dataDiv);

        // Show the submitted data div
        submittedDataDiv.classList.remove("hidden");

        // Reset the form
        registrationForm.reset();
    });
});
