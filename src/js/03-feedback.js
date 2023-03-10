import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea');

form.addEventListener('input', throttle(onFillForm, 500));
form.addEventListener('submit', onSubmitForm);

const formData = {};
const LOCALSTORAGE_KEYS = 'feedback-form-state';

function onFillForm(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem('LOCALSTORAGE_KEYS', JSON.stringify(formData));
}

function onSubmitForm(e) {
  e.preventDefault();
  console.log(JSON.parse(localStorage.getItem('LOCALSTORAGE_KEYS')));
  e.currentTarget.reset();
  localStorage.removeItem('LOCALSTORAGE_KEYS');
}

savedData();

function savedData() {
  const data = JSON.parse(localStorage.getItem('LOCALSTORAGE_KEYS'));
  if (data) {
    email.value = data.email;
    message.value = data.message;
  }
}
