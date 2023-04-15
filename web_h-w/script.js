<script language = "JavaScript">
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

  // Здесь можно добавить код для отправки данных формы на сервер.

  message.innerText = 'Данные отправлены.';
  message.classList.remove('error');
});
</script>