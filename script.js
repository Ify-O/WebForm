// Select Elements
const form = document.getElementById("registrationForm");

const email = document.getElementById("email");
const emailMessage = document.getElementById("emailMessage");

const password = document.getElementById("password");
const passwordStrength = document.getElementById("passwordStrength");

const bio = document.getElementById("bio");
const bioCount = document.getElementById("bioCount");

const fileInput = document.getElementById("file");
const fileName = document.getElementById("fileName");

// ----------------------
// Email Validation
// ----------------------

email.addEventListener("input", () => {
  const value = email.value.trim();

  if (value === "") {
    emailMessage.textContent = "";
    return;
  }

  if (email.checkValidity()) {
    emailMessage.textContent = "✓ Valid email";
    emailMessage.style.color = "green";
  } else {
    emailMessage.textContent = "✗ Invalid email";
    emailMessage.style.color = "red";
  }
});

// ----------------------
// Password Strength
// ----------------------

password.addEventListener("input", () => {
  const value = password.value;

  let strength = 0;

  if (value.length >= 8) strength++;
  if (/[A-Z]/.test(value)) strength++;
  if (/[a-z]/.test(value)) strength++;
  if (/[0-9]/.test(value)) strength++;
  if (/[^A-Za-z0-9]/.test(value)) strength++;

  switch (strength) {
    case 0:
    case 1:
      passwordStrength.textContent = "Weak Password";
      passwordStrength.style.color = "red";
      break;

    case 2:
    case 3:
      passwordStrength.textContent = "Medium Password";
      passwordStrength.style.color = "orange";
      break;

    case 4:
    case 5:
      passwordStrength.textContent = "Strong Password";
      passwordStrength.style.color = "green";
      break;
  }

  if (value.length === 0) {
    passwordStrength.textContent = "";
  }
});

// ----------------------
// Character Counter
// ----------------------

bio.addEventListener("input", () => {
  bioCount.textContent = bio.value.length;
});

// ----------------------
// File Upload
// ----------------------

fileInput.addEventListener("change", () => {
  if (fileInput.files.length > 0) {
    fileName.textContent = `Selected: ${fileInput.files[0].name}`;
  } else {
    fileName.textContent = "";
  }
});

// ----------------------
// Form Submit
// ----------------------

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!form.checkValidity()) {
    alert("Please complete all required fields correctly.");
    return;
  }

  // Collect Form Data
  const formData = new FormData(form);

  console.log("Form Submitted");

  for (let [key, value] of formData.entries()) {
    console.log(`${key}:`, value);
  }

  alert("Registration Successful!");

  form.reset();

  // Reset helper UI
  bioCount.textContent = "0";
  passwordStrength.textContent = "";
  emailMessage.textContent = "";
  fileName.textContent = "";
});

// ----------------------
// Reset Button
// ----------------------

form.addEventListener("reset", () => {
  setTimeout(() => {
    bioCount.textContent = "0";
    passwordStrength.textContent = "";
    emailMessage.textContent = "";
    fileName.textContent = "";
  }, 0);
});// Select Elements
const form = document.getElementById("registrationForm");

const email = document.getElementById("email");
const emailMessage = document.getElementById("emailMessage");

const password = document.getElementById("password");
const passwordStrength = document.getElementById("passwordStrength");

const bio = document.getElementById("bio");
const bioCount = document.getElementById("bioCount");

const fileInput = document.getElementById("file");
const fileName = document.getElementById("fileName");

// ----------------------
// Email Validation
// ----------------------

email.addEventListener("input", () => {
  const value = email.value.trim();

  if (value === "") {
    emailMessage.textContent = "";
    return;
  }

  if (email.checkValidity()) {
    emailMessage.textContent = "✓ Valid email";
    emailMessage.style.color = "green";
  } else {
    emailMessage.textContent = "✗ Invalid email";
    emailMessage.style.color = "red";
  }
});

// ----------------------
// Password Strength
// ----------------------

password.addEventListener("input", () => {
  const value = password.value;

  let strength = 0;

  if (value.length >= 8) strength++;
  if (/[A-Z]/.test(value)) strength++;
  if (/[a-z]/.test(value)) strength++;
  if (/[0-9]/.test(value)) strength++;
  if (/[^A-Za-z0-9]/.test(value)) strength++;

  switch (strength) {
    case 0:
    case 1:
      passwordStrength.textContent = "Weak Password";
      passwordStrength.style.color = "red";
      break;

    case 2:
    case 3:
      passwordStrength.textContent = "Medium Password";
      passwordStrength.style.color = "orange";
      break;

    case 4:
    case 5:
      passwordStrength.textContent = "Strong Password";
      passwordStrength.style.color = "green";
      break;
  }

  if (value.length === 0) {
    passwordStrength.textContent = "";
  }
});

// ----------------------
// Character Counter
// ----------------------

bio.addEventListener("input", () => {
  bioCount.textContent = bio.value.length;
});

// ----------------------
// File Upload
// ----------------------

fileInput.addEventListener("change", () => {
  if (fileInput.files.length > 0) {
    fileName.textContent = `Selected: ${fileInput.files[0].name}`;
  } else {
    fileName.textContent = "";
  }
});

// ----------------------
// Form Submit
// ----------------------

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!form.checkValidity()) {
    alert("Please complete all required fields correctly.");
    return;
  }

  // Collect Form Data
  const formData = new FormData(form);

  console.log("Form Submitted");

  for (let [key, value] of formData.entries()) {
    console.log(`${key}:`, value);
  }

  alert("Registration Successful!");

  form.reset();

  // Reset helper UI
  bioCount.textContent = "0";
  passwordStrength.textContent = "";
  emailMessage.textContent = "";
  fileName.textContent = "";
});

// ----------------------
// Reset Button
// ----------------------

form.addEventListener("reset", () => {
  setTimeout(() => {
    bioCount.textContent = "0";
    passwordStrength.textContent = "";
    emailMessage.textContent = "";
    fileName.textContent = "";
  }, 0);
});