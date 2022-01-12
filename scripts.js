const loginBtn = document.querySelector('.btn-login');
const textArea = document.querySelector('#textarea');

textArea.addEventListener('keypress', (e) => {
  const maximo = 500;
  if (textArea.value.length >= maximo) {
    e.preventDefault();
  }
});

textArea.addEventListener('keyup', () => {
  const counter = document.querySelector('#counter');
  counter.innerHTML = 500 - textArea.value.length;
});

loginBtn.addEventListener('click', () => {
  const email = document.querySelector('#email');
  const password = document.querySelector('#password');
  return email.value !== 'tryber@teste.com' && password.value !== '123456'
    ? alert('Email ou senha inválidos.') : alert('Olá, Tryber!');
});
