const arrVoc = [["hola", "hallo"],["noche", "nacht"],["manzana", "apfel"]];
const container = document.querySelector("#container");
const next = document.querySelector("#next");

container.innerHTML = arrVoc[0][1];

// Random Number between 0 an 2
function randomNumber () {
  let number = Math.round(Math.random()*2);
  return number
}


next.addEventListener("click", () => {

  inputText = document.getElementById("inputText").value;
  
  if (container.innerHTML == inputText) {
    let zahl = randomNumber();
    container.innerHTML = "";
    container.innerHTML = arrVoc[zahl][1];
  }
})
