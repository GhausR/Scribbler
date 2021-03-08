// Function that opens the Sign Up modal
function openSignUpModal() {
  document.getElementById("signin-modal").style.display = "none";
  document.getElementById("signup-modal").style.display = "block";
}

// Function that closes the Sign Up modal
function closeSignUpModal() {
  document.getElementById("signup-modal").style.display = "none";
  let elements = document.querySelectorAll(".errortext");
  let triangles = document.querySelectorAll(".triangle");

  // Hide the error messages on closing the modals
  for (let i = 0; i < 6; i++) {
    elements[i].style.visibility = "hidden";
    triangles[i].style.visibility = "hidden";
  }
}

// Function that opens up the Sign In modal
function openSignInModal() {
  document.getElementById("signup-modal").style.display = "none";
  document.getElementById("signin-modal").style.display = "block";
}

// Function that closes the Sign In modal
function closeSignInModal() {
  document.getElementById("signin-modal").style.display = "none";

  let elements = document.querySelectorAll(".errortext");
  let triangles = document.querySelectorAll(".triangle");

  // Hide error messages on closing the modals.
  for (let i = 0; i < 6; i++) {
    elements[i].style.visibility = "hidden";
    triangles[i].style.visibility = "hidden";
  }
}

// Fucntion to create the Submit button finctionality on the Sign Up modal. Also, checks if all the fields are filled and displays the required error messages. 
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

  // Close the modal if all the fields are filled
  if (count === 0) {
    document.getElementById("signup-modal").style.display = "none";
    let elements = document.querySelectorAll(".errortext");
    let triangles = document.querySelectorAll(".triangle");

    // Hide all error messages.
    for (let i = 0; i < 4; i++) {
      elements[i].style.visibility = "hidden";
      triangles[i].style.visibility = "hidden";
    }
  }
}

// Fucntion to create the Submit button finctionality on the Sign In modal. Also, checks if all the fields are filled and displays the required error messages. 
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

  // Close the modal if all the fields are filled.
  if (count === 0) {
    document.getElementById("signin-modal").style.display = "none";
    let elements = document.querySelectorAll(".errortext");
    let triangles = document.querySelectorAll(".triangle");

    // Hide all error messages
    for (let i = 4; i < 6; i++) {
      elements[i].style.visibility = "hidden";
      triangles[i].style.visibility = "hidden";
    }
  }
}
