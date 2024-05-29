// set add event listener

document.getElementById("Post-btn").addEventListener("click", function () {
  //   console.log("click korchi...");
  // take the input field value
  const TakeComment = document.getElementById("Comment-box");
  const TakeValue = TakeComment.value;
  // console.log(TakeValue)

  // jkhane dekhabo ta set kora

  const CommentContainer = document.getElementById("Comment-container");
  const p = document.createElement("p");
  p.innerText = TakeValue;
  p.classList.add("p-style");
  CommentContainer.appendChild(p);

  // clear the box

  TakeComment.value = "";
});
// delete function
document.getElementById("delete").addEventListener("click", function () {
  const removePost = document.getElementById("p-3");
  removePost.style.display = "none";
});

// edit function

document.getElementById("edit").addEventListener("click", function () {
  const takeForEdit = document.getElementById("p-3");
  const takeValueForEdit = takeForEdit.innerText;
  // console.log(takeValueForEdit)
  const EditSection = document.getElementById("Comment-box");
  EditSection.innerText = takeValueForEdit;
});