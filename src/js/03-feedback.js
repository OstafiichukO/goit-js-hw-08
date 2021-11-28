import throttle from 'lodash.throttle';
const formEl = document.querySelector('.feedback-form');
const emailEl = document.querySelector('[name="email"]');
const messageEl = document.querySelector('[name="message"]');

let feedbackData;
emailEl.addEventListener('input', throttle(feedbackText, 500));
messageEl.addEventListener('input', throttle(feedbackText, 500));

function feedbackText() {
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify({
      email: emailEl.value,
      message: messageEl.value,
    }),
  );
  feedbackData = JSON.parse(localStorage.getItem('feedback-form-state'));
}

if (localStorage.getItem('feedback-form-state')) {
  feedbackData = JSON.parse(localStorage.getItem('feedback-form-state'));
  emailEl.value = feedbackData.email;
  messageEl.value = feedbackData.message;
}

formEl.addEventListener('submit', resetStorage);

function resetStorage(event) {
  event.preventDefault();
  console.log(feedbackData);
  formEl.reset();
  localStorage.clear();
}