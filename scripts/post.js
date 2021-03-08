showPost();
let likes = 0;

// Loads the content from the session storage
function showPost() {
  document
    .getElementById("title")
    .setAttribute("value", sessionStorage.getItem("title"));

  document.getElementById("name2").innerHTML = sessionStorage.getItem(
    "userName"
  );

  document.getElementById("postContent").innerHTML = sessionStorage
    .getItem("postContent")
    .replace(/\s+/g, " ")
    .trim();
}

// Lets you edit the title of the post and its content
function edit() {
  let title = document.getElementById("title");
  title.style.border = "1px solid red";
  title.removeAttribute("readonly");

  let postContent = document.getElementById("postContent");
  postContent.style.border = "1px solid red";
  postContent.setAttribute("contentEditable", true);

  document.getElementById("edit").style.display = "none";
  document.getElementById("save").style.display = "";
}

// Saves the changes to the post
function save() {
  let title = document.getElementById("title");
  title.style.border = "none";
  title.setAttribute("readOnly", true);

  let postContent = document.getElementById("postContent");
  postContent.style.border = "none";
  postContent.setAttribute("contentEditable", false);

  document.getElementById("save").style.display = "none";
  document.getElementById("edit").style.display = "";
}

// Adds thr likes to the post
function like() {
  likes++;
  document.querySelector(".like button").innerHTML =
    '<i class="fas fa-thumbs-up"></i> &nbsp; Liked';
  if (likes === 1) {
    document.querySelector(".like p").innerHTML = likes + " person likes this!";
  } else {
    document.querySelector(".like p").innerHTML = likes + " people like this!";
  }
}

// Posts the comments in a chronological order.
function postComment() {
  let comment = document.getElementById("comment");
  let commentList = document.getElementById("all-comments");
  commentList.innerHTML =
    "<p>" + comment.value + "</p>" + commentList.innerHTML;
  comment.value = "";
}
