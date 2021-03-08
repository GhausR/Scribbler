// Function to open Sign Up modal
function openSignUpModal() {
  document.getElementById("signin-modal").style.display = "none";
  document.getElementById("signup-modal").style.display = "block";
}

// Function to close Sign Up modal
function closeSignUpModal() {
  document.getElementById("signup-modal").style.display = "none";
  let elements = document.querySelectorAll(".errortext");
  let triangles = document.querySelectorAll(".triangle");

  // hiding error messages on closing the modal:
  for (let i = 0; i < 6; i++) {
    elements[i].style.visibility = "hidden";
    triangles[i].style.visibility = "hidden";
  }
}

// function to open Sign In modal
function openSignInModal() {
  document.getElementById("signup-modal").style.display = "none";
  document.getElementById("signin-modal").style.display = "block";
}

// function to close Sign In modal
function closeSignInModal() {
  document.getElementById("signin-modal").style.display = "none";

  let elements = document.querySelectorAll(".errortext");
  let triangles = document.querySelectorAll(".triangle");

  // hiding error messages on closing the modal:
  for (let i = 0; i < 6; i++) {
    elements[i].style.visibility = "hidden";
    triangles[i].style.visibility = "hidden";
  }
}

// submit button functionality on sign up modal
// checks if the fields have been filled, and displays error messages if required
function signUpSubmit() {
  let formElement = document.getElementById("name").value;
  let count = 0;
  if (formElement.length === 0) {
    count++;
    document.getElementsByClassName("errortext")[0].style.visibility =
      "visible";
    document.getElementsByClassName("triangle")[0].style.visibility = "visible";
  }

  formElement = document.getElementById("username").value;
  if (formElement.length === 0) {
    count++;
    document.getElementsByClassName("errortext")[1].style.visibility =
      "visible";
    document.getElementsByClassName("triangle")[1].style.visibility = "visible";
  }

  formElement = document.getElementById("password").value;
  if (formElement.length === 0) {
    count++;
    document.getElementsByClassName("errortext")[2].style.visibility =
      "visible";
    document.getElementsByClassName("triangle")[2].style.visibility = "visible";
  }

  formElement = document.getElementById("confirm-password").value;
  if (formElement.length === 0) {
    count++;
    document.getElementsByClassName("errortext")[3].style.visibility =
      "visible";
    document.getElementsByClassName("triangle")[3].style.visibility = "visible";
  }

  // close the modal if all entries are filled:
  if (count === 0) {
    document.getElementById("signup-modal").style.display = "none";
    let elements = document.querySelectorAll(".errortext");
    let triangles = document.querySelectorAll(".triangle");

    // hide error messages:
    for (let i = 0; i < 4; i++) {
      elements[i].style.visibility = "hidden";
      triangles[i].style.visibility = "hidden";
    }
  }
}

// submit button functionality on sign up modal
// checks if the fields have been filled, and displays error messages if required
function signInSubmit() {
  let formElement = document.getElementById("username2").value;
  let count = 0;

  if (formElement.length === 0) {
    count++;

    document.getElementsByClassName("errortext")[4].style.visibility =
      "visible";
    document.getElementsByClassName("triangle")[4].style.visibility = "visible";
  }

  formElement = document.getElementById("password2").value;
  if (formElement.length === 0) {
    count++;
    document.getElementsByClassName("errortext")[5].style.visibility =
      "visible";
    document.getElementsByClassName("triangle")[5].style.visibility = "visible";
  }

  // close the modal if all entries are filled:
  if (count === 0) {
    document.getElementById("signin-modal").style.display = "none";
    let elements = document.querySelectorAll(".errortext");
    let triangles = document.querySelectorAll(".triangle");

    // hide error messages:
    for (let i = 4; i < 6; i++) {
      elements[i].style.visibility = "hidden";
      triangles[i].style.visibility = "hidden";
    }
  }
}
