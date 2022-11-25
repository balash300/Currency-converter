let fromInput = document.querySelector("#input");
let toInput = document.querySelector("#result");
let form = document.querySelector(".main > form");
let valutaParagraphFrom = document.querySelector(".from-rate");
let valutaParagraphTo = document.querySelector(".to-rate");
let firstButton = document.querySelectorAll(".button-frst");
let from = "RUB", to = "USD";

eventListeners();

function eventListeners() {
  form.addEventListener("click", handleValueta);
  fromInput.addEventListener("keyup", getDataByFrom);
  toInput.addEventListener("keyup", getDataByTo);
}

firstButton.forEach(x => x.setAttribute("style", "background: #833AE0; color: #fff"))

function handleValueta(e) {
  let targetSpace = e.target;
  Array.from(targetSpace.parentElement.children).forEach((x) => x.removeAttribute("style"));
  if (targetSpace.parentElement.className.indexOf("left-button") !== -1) {
    targetSpace.setAttribute("style", "background: #833AE0; color: #fff");
    from = targetSpace.textContent;
    getDataByFrom();
  } else if (targetSpace.parentElement.className.indexOf("right-button") !== -1) {
    targetSpace.setAttribute("style", "background: #833AE0; color: #fff");
    to = targetSpace.textContent;
    getDataByFrom();
  }
}

async function getDataByFrom() {
  const res = await fetch(`https://api.exchangerate.host/latest?base=${from}&symbols=${to}`);
  const data = await res.json();
  toInput.value = (Object.values(data.rates)[0] * fromInput.value).toFixed(5);

  valutaParagraphFrom.textContent = `1 ${data.base} = ${Object.values(data.rates)[0].toFixed(2)} ${Object.keys(data.rates)}`;
  valutaParagraphTo.textContent = `1 ${Object.keys(data.rates)} = ${(1 / Object.values(data.rates)[0]).toFixed(5)} ${data.base}`;

  if (from && to) {
    valutaParagraphFrom.textContent = `1 ${data.base} = ${Object.values(data.rates)[0].toFixed(2)} ${Object.keys(data.rates)}`;
    valutaParagraphTo.textContent = `1 ${Object.keys(data.rates)} = ${(1 / Object.values(data.rates)[0]).toFixed(5)} ${data.base}`;
  }
}
async function getDataByTo() {
  const res = await fetch(`https://api.exchangerate.host/latest?base=${from}&symbols=${to}`);
  const data = await res.json();
  fromInput.value = (toInput.value / Object.values(data.rates)[0]).toFixed(2);
}