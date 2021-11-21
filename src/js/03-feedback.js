import throttle from 'lodash.throttle';
const formEl = document.querySelector('.feedback-form');
const emailEl = document.querySelector('[name="email"]');
const messageEl = document.querySelector('[name="message"]');
const btnEl = document.querySelector('button');

let feedbackData;
emailEl.addEventListener('input', throttle(feedbackText, 500));
messageEl.addEventListener('input', throttle(feedbackText, 500));

if (localStorage.getItem("feedback-form-state") {
  feedbackData = JSON.parse(localStorage.getItem("feedback-form-state"));
  emailEl.value = feedbackData.email
  messageEl.value = feedbackData.message
};