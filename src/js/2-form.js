const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const messageInput = form.elements.message;
const emailInput = form.elements.email;

function savedForm() {
  const formData = {
    email: emailInput.value.trim(),
    message: messageInput.value.trim(),
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function completeForm() {
  const savedFormData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedFormData) {
    emailInput.value = savedFormData.email || '';
    messageInput.value = savedFormData.message || '';
  }
}

completeForm();

form.addEventListener('input', () => {
  savedForm();
});

form.addEventListener('submit', event => {
  event.preventDefault();
  if (emailInput.value.trim() && textareaInput.value.trim()) {
    console.log({
      email: emailInput.value.trim(),
      message: messageInput.value.trim(),
    });
    localStorage.removeItem(STORAGE_KEY);
    form.reset();
    return;
  }
});
