const form = document.querySelector(".form-section");

const firstNameOutput = document.querySelector("#first_name_output");
const lastNameOutput = document.querySelector("#last_name_output");
const emailOutput = document.querySelector("#email_output");
const passwordOutput = document.querySelector("#password_output");
const termsOutput = document.querySelector("#terms_output");

const root = document.querySelector("html");
const btn = document.querySelector("#toggle");

function toggleDarkMode() {
  root.classList.toggle("dark");
}

btn.addEventListener("click", toggleDarkMode);

if (form) {
  form.addEventListener("invalid", cancelPopup, true);
  form.addEventListener("submit", handleSubmit);
}
function cancelPopup(event) {
  event.preventDefault();
}
function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(form);
  // 2. Vis værdierne i de rigtige output-felter
  const firstName = formData.get("first_name");
  firstNameOutput.textContent = firstName;
  lastNameOutput.textContent = formData.get("last_name");
  emailOutput.textContent = formData.get("email");
  passwordOutput.textContent = formData.get("password");
  termsOutput.textContent = formData.get("accept_terms");
  form.reset();
}

const book = document.querySelector("#book");
const wheel = document.querySelector("#wheel");
const rain = document.querySelector("#rain");

const infotext = document.querySelector("#infotext");
const infobox = document.querySelector("#efficiency");
const infobox1 = document.querySelector("#requirement");

book.addEventListener("click", bookinfo);
wheel.addEventListener("click", wheelinfo);
rain.addEventListener("click", raininfo);

function bookinfo() {
  console.log("bookinfo");
  infotext.textContent = "Studerende";
  efficiency.textContent = "Unge studerende lever ofter på et stramt budget og en travl kalender og har hverken tid eller overskud til en punkteret cykel";
  requirement.textContent = "Vi vil gøre det nemt og billigt for studerende at få fikset sin punkteret cykel.";
}
function wheelinfo() {
  console.log("wheelinfo");
  infotext.textContent = "Punkteret dæk";
  efficiency.textContent = "Et punkteret dæk er aldrig sjovt. Det kan ske for en hver og hvor som helst";
  requirement.textContent = "Det skal være nemt og hurtigt at finde hjælp til at få fikset dit punkteret dæk";
}
function raininfo() {
  console.log("raininfo");
  infotext.textContent = "Det danskevejr";
  efficiency.textContent = "Vi alle kender det dansek vejr... Det er ikke til at regne med.";
  requirement.textContent = "Regnen skal ikke stoppe dig, vi hjælper dig til at komme hurtigt i tørvejr";
}
