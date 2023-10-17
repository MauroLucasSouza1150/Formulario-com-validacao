// Seleção dos elementos;
const form = document.getElementById("form");
const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const passwordConfirm = document.getElementById("password-confirm");


//Eventos;
form.addEventListener("submit", (event) => {
  event.preventDefault();

  checkForm();
})

email.addEventListener("blur", () => {
  checkInputEmail();
})


username.addEventListener("blur", () => {
  checkInputUsername();
})


// Funções;
function checkInputUsername(){
  const usernameValue = username.value;

  if(usernameValue === ""){
    errorInput(username, "Preencha o nome!")
  }else{
    const formItem = username.parentElement;
    formItem.className = "form-container"
  }

}

function checkInputEmail(){
  const emailValue = email.value;

  if(emailValue === ""){
    errorInput(email, "O email é obrigatório!")
  }else{
    const formItem = email.parentElement;
    formItem.className = "form-container"
  }


}


function checkInputPassword(){
  const passwordValue = password.value;

  if(passwordValue === ""){
    errorInput(password, "A senha é obrigatória!")
  }else if(passwordValue.length < 6){
    errorInput(password, "A senha precisa ter no mínimo 6 caracteres.")
  }else{
    const formItem = password.parentElement;
    formItem.className = "form-container"
  }


}


function checkInputPasswordConfirmation(){
  const passwordValue = password.value;
  const confirmationPasswordValue = passwordConfirm.value;

  if(confirmationPasswordValue === ""){
    errorInput(passwordConfirm, "A confirmação de senha é obrigatória!")
  }else if(confirmationPasswordValue !== passwordValue){
    errorInput(passwordConfirm, "Essa senha é diferente da primeira.")
  }else{
    const formItem = passwordConfirm.parentElement;
    formItem.className = "form-container"
  }


}


function checkForm(){
  checkInputUsername();
  checkInputEmail();
  checkInputPassword();
  checkInputPasswordConfirmation();

  const formItems = form.querySelectorAll(".form-container")

  const isValid = [...formItems].every( (item) => {
    return item.className === "form-container"
  });

  if(isValid){
    alert("CADASTRADO COM SUCESSO!")
  }

}

// função de erro quando o usuário não preencher os inputs;
function errorInput(input, message){
  const formItem = input.parentElement;
  const textMessage = formItem.querySelector("a")

  textMessage.innerText = message;

  formItem.className = "form-container error"

}