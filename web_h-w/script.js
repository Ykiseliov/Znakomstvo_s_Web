const form = document.querySelector('form');
const emailInput = document.getElementById('email');
const sendButton = document.getElementById('send');
const message = document.getElementById('message');

sendButton.addEventListener('click', () => {
  const email = emailInput.value.trim();

  if (!email) {
    message.innerText = 'Ошибка: вы не ввели почту!';
    message.classList.add('error');
    return;
  }

  message.innerText = 'Вы подписались на рассылку!';
  message.classList.remove('error');
});
