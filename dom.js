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
  buttons: document.getElementById("btn"),
  text: document.querySelector("#text"),
  points: document.querySelectorAll(".point"),
  card: document.getElementById("an"),
  stuff: document.getElementById("firstname"),
  formfirst: document.querySelector(`#formfirst`),
  input: document.querySelector('.inp')
};

DOMSelectors.button.addEventListener("click", function () {
    let input = DOMSelectors.formfirst.value;
    DOMSelectors.card.insertAdjacentHTML("afterend",`<div class="container"> <div class="card"><h1> ${input}</h1><button type="button" class="btn">remove</button>`)
    clear();
})
function remove() {
    let buttons = document.querySelectorAll(".btn");
    buttons.forEach((btn) => 
        btn.addEventListener("click",  (clic) => {
            clic.target.parentElement.buttons
            console.log("e")
        })
    );
}
function clear(){
    DOMSelectors.input.value="";
}
`const scard = event.target.parentElement.remove`
remove();
