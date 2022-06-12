import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form");
const LOCALSTORAGE_KEY = "feedback-form-state";
const inputEmail = document.querySelector('input[name="email"]');
const inputMessage = document.querySelector('textarea[name="message"]');
let formData = {};

populateInput();

form.addEventListener("input", throttle(setMessageToLocal, 500));
form.addEventListener('submit', resetAndSubnitForm);

function resetAndSubnitForm(evn) {
    evn.preventDefault();
    const objSubmit = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY))
    console.log(objSubmit);
    localStorage.removeItem(LOCALSTORAGE_KEY);

	formData = {};
    form.reset();
}

function setMessageToLocal(evn) {
   const message = evn.target.value;

   formData[evn.target.name] = message;
   localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

function populateInput() {
   const textForInput = localStorage.getItem(LOCALSTORAGE_KEY);
   const obj = JSON.parse(textForInput);
   if (textForInput) {
      if (obj.email) {
         inputEmail.value = obj.email;
      }
      if (obj.message) {
         inputMessage.value = obj.message;
		}
		formData = obj;
   }
}