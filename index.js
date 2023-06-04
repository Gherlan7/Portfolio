var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

const form = document.getElementById("submit-to-google-sheet");

form.addEventListener("submit", function handleSubmit(event) {
  event.preventDefault();

  // 👇️ Send data to the server here

  // 👇️ Reset the form here
  form.reset();
});
