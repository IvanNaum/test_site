(function () {
  document.getElementById("displayModalBtn").addEventListener("click", displayModal);
  document.getElementById("hideModalBtn").addEventListener("click", hideModal);
  document.getElementById("overlay").addEventListener("click", hideModal);
  modal = document.getElementById("modal");
  body = document.getElementsByTagName("body")[0]
  function displayModal() {
    modal.classList.add("show");
    body.classList.add("lock")
  }
  function hideModal() {
    modal.classList.remove("show");
    body.classList.remove("lock")
  }
})();
