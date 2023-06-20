//First the parameters of this project have been determined.
let parameters = {
  count: false,
  letters: false,
  numbers: false,
  special: false,
};

//A constant of the id of the progressbar is set.
let strengthBar = document.getElementById("strength-bar");
const strengthChecker = () => {
  //The value of the input box has been collected and stored in a constant called ‘password’.
  let password = document.getElementById("password").value;

  //Now the values ​​of the parameters have been added.
  parameters.letters = /[A-Za-z]+/.test(password) ? true : false;
  parameters.numbers = /[0-9]+/.test(password) ? true : false;
  parameters.special = /[!\"$%&/()=?@~`\\.\’;:+=^*_-]+/.test(password)
    ? true
    : false;
  parameters.count = password.length > 7 ? true : false;

  let barLength = Object.values(parameters).filter((value) => value);

  strengthBar.innerHTML = "";

  for (let i in barLength) {
    let span = document.createElement("span");
    span.classList.add("strength");
    strengthBar.appendChild(span);
  }

  //Here 4 types of parameters have been used so 4 types of cases can be seen. A different background color is used for each step.
  let spanRef = document.getElementsByClassName("strength");
  for (let i = 0; i < spanRef.length; i++) {
    switch (spanRef.length - 1) {
      case 0:
        spanRef[i].style.background = "#f76c8d";
        break;
      case 1:
        spanRef[i].style.background = "#ffa77b";
        break;
      case 2:
        spanRef[i].style.background = "#ffec97";
        break;
      case 3:
        spanRef[i].style.background = "#8ff7c6";
        break;
    }
  }
};

const toggle = () => {
  let password = document.getElementById("password");
  let eye = document.getElementById("toggle");

  if (password.getAttribute("type") == "password") {
    password.setAttribute("type", "text");
    eye.style.filter =
      "invert(37%) sepia(17%) saturate(702%) hue-rotate(191deg) brightness(90%) contrast(89%)";
  } else {
    password.setAttribute("type", "password");
    eye.style.filter = "";
  }
};

const toggleConfirm = () => {
  let password = document.getElementById("confirm_password");
  let eye = document.getElementById("toggle-confirm");

  if (password.getAttribute("type") == "password") {
    password.setAttribute("type", "text");
    eye.style.filter =
      "invert(37%) sepia(17%) saturate(702%) hue-rotate(191deg) brightness(90%) contrast(89%)";
  } else {
    password.setAttribute("type", "password");
    eye.style.filter = "";
  }
};

const arrowOnClick = () =>
  window.scrollTo({
    left: 0,
    top: document.body.scrollHeight,
    behavior: "smooth",
  });

//Check if password and confirmation are the same
const checkPassword = () => {
  let password = document.getElementById("password").value;
  let confirm = document.getElementById("confirm_password").value;
  let text;

  if (password !== confirm) {
    text = "Passwords must be equals";
    errorSpan = document.getElementById("error");
    errorSpan.innerHTML = text;
    errorSpan.style.color = "#ee99ad";
  } else {
    text = "All good";
    errorSpan = document.getElementById("error");
    errorSpan.innerHTML = text;
    errorSpan.style.color = "var(--secondary-color)";
  }
};
