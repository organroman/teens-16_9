// Сделать форму логина с сохранением данных в localStorage.

const loginInput = document.createElement("input");
loginInput.id = `userName`;
const loginLabel = document.createElement("label");
loginLabel.htmlFor = "userName";
loginLabel.textContent = `User name`;

const password = document.createElement("input");
password.id = `password`;
const passwordLable = document.createElement("label");
passwordLable.htmlFor = "password";
passwordLable.textContent = `Password`;

document.body.prepend(password);
document.body.prepend(passwordLable);
document.body.prepend(loginInput);
document.body.prepend(loginLabel);

const button = document.createElement("button");
button.innerText = `save`;
document.body.append(button);


const userNameLS = localStorage.getItem(`userName`);
if (userNameLS){
    loginInput.value = userNameLS;
}

const passwordLS = localStorage.getItem(`password`);
if (passwordLS) {
password.value = passwordLS;
}

button.addEventListener("click", function () {
  let userNameValue = loginInput.value.trim();
  let passwordValue = password.value.trim();
  const message = document.createElement("p");
  document.body.append(message);
  if (!userNameValue || !passwordValue) {
    message.textContent = `both fields are required`;
    message.style.color = "red";
    return;
  }
  localStorage.setItem("userName", userNameValue);
  localStorage.setItem("password", passwordValue);
  message.textContent = `saved`
  message.style.color = "green"
  loginInput.value = ``;
  password.value = ``;
});
