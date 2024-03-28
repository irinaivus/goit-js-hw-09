const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const textarea = form.querySelector('#textareaInput');
const emailInput = form.querySelector('#emailInput');

form.addEventListener('submit', onSubmit);
textarea.addEventListener('input', onTextareaInput);
emailInput.addEventListener('input', onTextareaInput);

function updateFormFields() {
  const formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  emailInput.value = formData.email ?? '';
  textarea.value = formData.message ?? '';
}
updateFormFields();

function onTextareaInput(event) {
  const formData = {
    email: emailInput.value.trim(),
    message: textarea.value.trim(),
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onSubmit(event) {
  event.preventDefault();
  const formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  if (textarea.value.trim() === '' || emailInput.value.trim() === '') {
    return;
  }
  if (formData.email && formData.message) {
    console.log(formData);

    localStorage.removeItem(STORAGE_KEY);
    form.reset();
  }
}
