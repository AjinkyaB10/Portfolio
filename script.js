const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const subject = `Portfolio Contact Message from ${name}`;

  const body = `
Name: ${name}
Email: ${email}

Message:
${message}
  `;

  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=ajinkyabelsare433@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  window.open(gmailLink, "_blank");

  alert(
    "Your email app has been opened. Please click Send to complete your message.",
  );

  contactForm.reset();
});

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    themeToggle.textContent = "☀️";
  } else {
    themeToggle.textContent = "🌙";
  }
});
