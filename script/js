// Floating WhatsApp Button
document.addEventListener("DOMContentLoaded", function() {
  const waBtn = document.createElement("a");
  waBtn.href = "https://wa.me/6281190088889";
  waBtn.className = "floating-wa";
  waBtn.innerHTML = "💬";
  document.body.appendChild(waBtn);
});

// EmailJS Integration
(function() {
  emailjs.init("YOUR_PUBLIC_KEY"); // <-- ganti pakai PUBLIC_KEY EmailJS kamu
})();

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
    from_name: document.getElementById("name").value,
    from_email: document.getElementById("email").value,
    message: document.getElementById("message").value
  })
  .then(() => alert("Message sent successfully!"))
  .catch(() => alert("Failed to send message. Please try again."));
});

