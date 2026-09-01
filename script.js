const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open menu');
    });
  });
}

const revealItems = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach(item => observer.observe(item));
} else {
  revealItems.forEach(item => item.classList.add('visible'));
}

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

// V10 — Forminit direct website submission.
// After creating the form in Forminit, paste the Form ID below.
const FORMINIT_FORM_ID = "7jvztymn3tx";

const inquiryForm = document.getElementById("inquiry-form");
const formStatus = document.getElementById("form-status");

if (inquiryForm) {
  inquiryForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const submitButton = inquiryForm.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.textContent;

    if (
      !FORMINIT_FORM_ID ||
      FORMINIT_FORM_ID === "7jvztymn3tx"
    ) {
      formStatus.textContent = "Form setup is not complete yet.";
      formStatus.classList.remove("success");
      formStatus.classList.add("error");
      return;
    }

    submitButton.disabled = true;
    submitButton.textContent = "Sending…";
    formStatus.textContent = "Sending…";
    formStatus.classList.remove("success", "error");

    const sourceData = new FormData(inquiryForm);
    const helpChoices = Array.from(
      inquiryForm.querySelectorAll('input[name="help-choice"]:checked')
    ).map((input) => input.value);

    const formData = new FormData();
    formData.append(
      "fi-sender-fullName",
      sourceData.get("fi-sender-fullName") || ""
    );
    formData.append(
      "fi-sender-email",
      sourceData.get("fi-sender-email") || ""
    );
    formData.append(
      "fi-text-business-name",
      sourceData.get("fi-text-business-name") || "Not provided"
    );
    formData.append(
      "fi-text-looking-for-help-with",
      helpChoices.length ? helpChoices.join(", ") : "Not specified"
    );
    formData.append(
      "fi-text-what-could-be-working-better",
      sourceData.get("fi-text-what-could-be-working-better") || ""
    );

    try {
      const forminit = new Forminit();
      const { error } = await forminit.submit(FORMINIT_FORM_ID, formData);

      if (error) {
        throw new Error(error.message || "Something went wrong.");
      }

      inquiryForm.reset();
      formStatus.textContent =
        "Thanks — your message is on its way. We’ll be in touch soon.";
      formStatus.classList.add("success");
    } catch (error) {
      formStatus.textContent =
        "That didn’t send. Please try again or email hello@lineandmain.ca.";
      formStatus.classList.add("error");
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = originalButtonText;
    }
  });
}
