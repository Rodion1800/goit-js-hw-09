document.addEventListener('DOMContentLoaded', () => {
  const formData = { email: '', message: '' };

  const form = document.querySelector('.feedback-form');

  const savedData = localStorage.getItem('feedback-form-state');
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    formData.email = parsedData.email;
    formData.message = parsedData.message;

    form.querySelector('input[name="email"]').value = formData.email;
    form.querySelector('textarea[name="message"]').value = formData.message;
  }

  form.addEventListener('input', event => {
    const { name, value } = event.target;

    if (name === 'email') {
      formData.email = value;
    }

    if (name === 'message') {
      formData.message = value;
    }

    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  });

  form.addEventListener('submit', event => {
    event.preventDefault();

    if (formData.email === '' || formData.message === '') {
      alert('all fields must be filled');
    } else {
      console.log(formData);

      localStorage.removeItem('feedback-form-state');
      formData.email = '';
      formData.message = '';
      form.querySelector('input[name="email"]').value = '';
      form.querySelector('textarea[name="message"]').value = '';
    }
  });
});
