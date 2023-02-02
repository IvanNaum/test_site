(function () {
  document.getElementById("displayModalBtn").addEventListener("click", displayModal);
  document.getElementById("hideModalBtn").addEventListener("click", hideModal);
  document.getElementById("overlay").addEventListener("click", hideModal);
  modal = document.getElementById("modal");
  function displayModal() {
    modal.classList.add("show");
  }
  function hideModal() {
    modal.classList.remove("show");
  }
})();
