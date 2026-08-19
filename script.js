// KQ Digital shared scripts
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile menu
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
menuBtn.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', open);
});

// Rotating hero word (home page only)
const rotEl = document.getElementById('rotWord');
if (rotEl) {
  const rotWords = ['Google','Facebook','Instagram','LinkedIn','TikTok'];
  let rotI = 0;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  setInterval(() => {
    rotI = (rotI + 1) % rotWords.length;
    if (reduceMotion) { rotEl.textContent = rotWords[rotI]; return; }
    rotEl.style.opacity = 0;
    setTimeout(() => { rotEl.textContent = rotWords[rotI]; rotEl.style.opacity = 1; }, 250);
  }, 2400);
}

// Contact form -> kqdigital.mkt@gmail.com via FormSubmit (contact page only)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', async e => {
    e.preventDefault();
    const form = e.target;
    const btn = form.querySelector('button[type="submit"]');
    const msg = document.getElementById('formMsg');
    btn.disabled = true; btn.style.opacity = .6;
    const payload = {
      _subject: 'New KQuestion from the KQ Digital website',
      name: document.getElementById('f-name').value,
      email: document.getElementById('f-email').value,
      phone: (document.getElementById('f-cc').value + ' ' + document.getElementById('f-phone').value).trim(),
      company: document.getElementById('f-company').value,
      message: document.getElementById('f-msg').value
    };
    try {
      const res = await fetch('https://formsubmit.co/ajax/kqdigital.mkt@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!res.ok) throw new Error('send failed');
      msg.textContent = "Message received. We'll reply within one working day.";
      msg.style.display = 'block';
      form.reset();
    } catch (err) {
      msg.textContent = 'Something went wrong sending your message. Please email us directly at kqdigital.mkt@gmail.com.';
      msg.style.display = 'block';
      msg.style.background = '#fdecec';
      msg.style.color = '#8a1f1f';
    }
    btn.disabled = false; btn.style.opacity = 1;
  });
}
