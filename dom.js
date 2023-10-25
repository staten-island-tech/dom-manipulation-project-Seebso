/* DOMSelectors = {
    // store all related code for selecting elements here
        form: document.querySelector("#form"),
        firstname: document.querySelector(".first-name"),
        h2s: document.querySelectorAll("h2"),
    };
    console.log(DOMSelectors.h2s)
    DOMSelectors.form.addEventListener("submit", function (event) {
      event.preventDefault();
        DOMSelectors.h2s.forEach((header)=> header.textContent = DOMSelectors.firstname.value
        );
    }); */
    /* console.log(DOMSelectors.firstname.value */
const DOMSelectors = {
  button: document.getElementById("btn"),
  text: document.querySelector("#text"),
  points: document.querySelectorAll(".point"),
  box: document.getElementById("an"),
  stuff: document.getElementById("firstname")
};
function ayo() {
    inf = document.getElementById(formfirst)
    text.textContent(inf)
}
DOMSelectors.button.addEventListener("click", function(){
    ayo(DOMSelectors.text);
})
