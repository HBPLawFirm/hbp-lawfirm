// Parallax hero (simple)
(function(){
  const heroBg = document.querySelector('.hero-bg');
  window.addEventListener('scroll', function(){
    const sc = window.scrollY;
    if(heroBg) heroBg.style.transform = 'translateY(' + (sc * 0.15) + 'px)';
  });
})();

// Floating WhatsApp button (adds element)
(function(){
  const a = document.createElement('a');
  a.href = 'https://wa.me/6281190088889'; // Stefanus
  a.target = '_blank';
  a.rel = 'noopener';
  a.className = 'floating-wa';
  a.setAttribute('aria-label', 'Chat on WhatsApp');
  a.innerHTML = '<img src="data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22><path fill=%22%23000%22 d=%22M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z%22/></svg>' + ' 💬';
  document.body.appendChild(a);
})();

// EmailJS form (fallback to mailto if not configured)
(function(){
  // If you want EmailJS, replace PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID below
  const PUBLIC_KEY = 'YOUR_EMAILJS_PUBLIC_KEY';
  const SERVICE_ID = 'YOUR_SERVICE_ID';
  const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';

  // init only if provided
  if(window.emailjs && PUBLIC_KEY && PUBLIC_KEY !== 'YOUR_EMAILJS_PUBLIC_KEY'){
    try{ emailjs.init(PUBLIC_KEY); }catch(e){ /* ignore */ }
  }

  const form = document.getElementById('contactForm');
  if(!form) return;

  form.addEventListener('submit', function(e){
    e.preventDefault();
    const data = {
      from_name: document.getElementById('name').value,
      from_email: document.getElementById('email').value,
      message: document.getElementById('message').value
    };

    if(window.emailjs && SERVICE_ID && TEMPLATE_ID && SERVICE_ID !== 'YOUR_SERVICE_ID'){
      emailjs.send(SERVICE_ID, TEMPLATE_ID, data)
        .then(function(){ alert('Message sent. Thank you.'); form.reset(); })
        .catch(function(){ alert('Send failed — opening mail client.'); fallbackMail(data); });
    } else {
      fallbackMail(data);
    }

    function fallbackMail(d){
      const subject = encodeURIComponent('Website contact from ' + (d.from_name || 'Prospect'));
      const body = encodeURIComponent(d.message + '\n\nFrom: ' + d.from_email);
      window.location.href = 'mailto:kantorhukum.hbp@gmail.com?subject=' + subject + '&body=' + body;
    }
  });
})();

