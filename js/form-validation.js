/**
 * MedAgg Modern UI - Form Validation & Interactive Feedback
 */

document.addEventListener('DOMContentLoaded', () => {
  initContactForm();
});

function initContactForm() {
  const form = document.getElementById('contact-form') || document.querySelector('form.contact-form');
  if (!form) return;

  const nameInput = form.querySelector('#name') || form.querySelector('input[name="name"]');
  const emailInput = form.querySelector('#email') || form.querySelector('input[name="email"]');
  const phoneInput = form.querySelector('#mobile') || form.querySelector('input[name="mobile"]');
  const messageInput = form.querySelector('#message') || form.querySelector('textarea[name="message"]');
  const submitBtn = form.querySelector('button[type="submit"]');
  const successAlert = document.getElementById('form-success-message');

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone) => {
    // 10 digits validation
    return /^\d{10}$/.test(phone.replace(/[\s-]/g, ''));
  };

  // Only allow digits in phone input
  if (phoneInput) {
    phoneInput.addEventListener('keypress', (e) => {
      if (!/\d/.test(e.key)) {
        e.preventDefault();
      }
    });
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    // Validate Name
    if (nameInput) {
      if (!nameInput.value.trim()) {
        nameInput.classList.add('is-invalid');
        isValid = false;
      } else {
        nameInput.classList.remove('is-invalid');
      }
    }

    // Validate Email
    if (emailInput) {
      if (!validateEmail(emailInput.value.trim())) {
        emailInput.classList.add('is-invalid');
        isValid = false;
      } else {
        emailInput.classList.remove('is-invalid');
      }
    }

    // Validate Phone
    if (phoneInput) {
      if (!validatePhone(phoneInput.value.trim())) {
        phoneInput.classList.add('is-invalid');
        isValid = false;
      } else {
        phoneInput.classList.remove('is-invalid');
      }
    }

    if (!isValid) return;

    // Submission feedback
    if (submitBtn) {
      submitBtn.disabled = true;
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = '<span>Submitting...</span>';

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        form.reset();

        if (successAlert) {
          successAlert.style.display = 'block';
          successAlert.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          setTimeout(() => {
            successAlert.style.display = 'none';
          }, 6000);
        } else {
          alert('Thank you! Your message has been sent successfully. We will get in touch shortly.');
        }
      }, 1000);
    }
  });

  // Clear validation styling on input
  [nameInput, emailInput, phoneInput, messageInput].forEach(input => {
    if (input) {
      input.addEventListener('input', () => {
        input.classList.remove('is-invalid');
      });
    }
  });
}
