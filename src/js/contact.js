document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission
  
    // Get input values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
  
    // Validate inputs (optional)
    if (!name || !email) {
      alert("Please fill out all fields.");
      return;
    }
  
    // Process the form data
    console.log("Name:", name);
    console.log("Email:", email);
  
    // Display success message
    const successMessage = document.getElementById("successMessage");
    successMessage.innerHTML = `Thank you, <strong>${name}</strong>! Your submission was successful.`;
    successMessage.style.display = "block";
  
    // Reset form fields
    document.getElementById("contactForm").reset();
  });