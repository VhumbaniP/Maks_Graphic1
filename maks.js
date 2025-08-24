
    // Smooth email compose from form (works on GitHub Pages since no backend)
    function sendQuote(e) {
      e.preventDefault();
      const form = e.target;
      const name = encodeURIComponent(form.name.value);
      const email = encodeURIComponent(form.email.value);
      const message = encodeURIComponent(form.message.value);

      // Create a mailto link
      const subject = `New Quote Request from ${form.name.value}`;
      const body = `Name: ${form.name.value}\nEmail: ${form.email.value}\n\nMessage:\n${form.message.value}`;
      const mailto = `mailto:phumudzomaks10@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      window.location.href = mailto;
      return false;
    }

    // Mobile nav toggle
const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("show");
});


  

