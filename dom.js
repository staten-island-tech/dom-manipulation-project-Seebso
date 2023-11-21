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
  input: document.querySelector('.inp'),
  buto: document.querySelector('#container'),
};
function remove() {
    let buto = document.querySelectorAll(".but");
    buto.forEach((but) => 
        but.addEventListener("click",  (clic) => {
            clic.currentTarget.parentNode.remove();
            console.log("e")
        })
    );
}
DOMSelectors.button.addEventListener("click", function () {
    let input = DOMSelectors.formfirst.value;
    DOMSelectors.buto.card.insertAdjacentHTML("beforeend",`<div class="card"><h1> ${input}</h1><button type="button"class="but">remove</button></div>`)
    clear();
    remove();
})

function clear(){
    DOMSelectors.input.value="";
}
`const scard = event.target.parentElement.remove`
