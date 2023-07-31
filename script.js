// containers
const rateValueCtn = document.getElementById("rate-value");
const formValueCtn = document.getElementById("form-value");

const form = document.getElementById("select-form");

const btn1 = document.getElementById("button1");
const btn2 = document.getElementById("button2");
const btn3 = document.getElementById("button3");
const btn4 = document.getElementById("button4");
const btn5 = document.getElementById("button5");
const selectionData = document.getElementById("selectionValue");

let currValue = 0;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (currValue > 0) {
    selectionData.innerHTML = `You selected ${currValue} out of 5`;
    rateValueCtn.classList.remove("hidden");
    formValueCtn.classList.add("hidden");
  }
});

btn1.addEventListener("click", (e) => {
  currValue = e.target.value;
});

btn2.addEventListener("click", (e) => {
  currValue = e.target.value;
});

btn3.addEventListener("click", (e) => {
  currValue = e.target.value;
});

btn4.addEventListener("click", (e) => {
  currValue = e.target.value;
});

btn5.addEventListener("click", (e) => {
  currValue = e.target.value;
});
