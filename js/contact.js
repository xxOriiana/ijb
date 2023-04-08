const form = document.querySelector("#contactForm");
const submitButton = document.querySelector("#submitButton");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (form.checkValidity()) {
    // Send form data to server
    // ...

    // Show success message
    const successMsg = document.createElement("div");
    successMsg.classList.add("text-center", "mt-3", "text-success");
    successMsg.textContent = "Tu mensaje fue exitosamente enviado.";
    form.appendChild(successMsg);

    // Reset form and remove validation errors
    form.reset();
    form.classList.remove("was-validated");
  } else {
    form.classList.add("was-validated");
  }
});
