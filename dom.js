const myform = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userlist = document.querySelector("#users");
console.log(myform, nameInput.value, emailInput.value, msg);
myform.addEventListener("submit", onSubmit);
function onSubmit(e) {
  console.log(nameInput.value, emailInput.value);

  e.preventDefault();
  if (!nameInput.value || !emailInput.value) {
    msg.classList.add("error");
    msg.innerHTML = "plese enter all the fields";
    setTimeout(() => msg.remove(), 3000);
  } else {
    const li = document.createElement("li");
    li.appendChild(
      document.createTextNode(`${nameInput.value}:${email.input.value}`)
    );
    nameInput.value = " ";
    emailInput.value = " ";
  }
}
