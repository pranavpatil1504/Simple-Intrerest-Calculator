let calculateBtn = document.getElementById("calculate-btn");
let clearButton = document.getElementById("clear");
let result = document.getElementById("result");
let calculate = () => {
  let p = Number(document.getElementById("principal").value);
  let r = Number(document.getElementById("rate").value);
  let t = Number(document.getElementById("time").value);
  let duration = document.getElementById("duration").value;
  if (p < 1 || p > 1000000) {
    alert("Principal must be between 1 to 1,000,000");
    return;
  }
  if (r < 0.1 || r > 40) {
    alert("Rate must be between 0.1 to 40");
    return;
  }
  if (t < 1 || t > 60) {
    alert("Time must be between 1 to 60");
    return;
  }
  let simpleInterest = duration == "year" ? (p * r * t) / 100 : (p * r * t) / 1200;
  let amount = p + simpleInterest;

  result.innerHTML = `<div>Principal Amount: <span>${p.toFixed(2)}</span></div>
  <div>Total Interest: <span>${simpleInterest.toFixed(2)}</span></div>
  <div>Total Amount: <span>${amount.toFixed(2)}</span></div>`;
};
calculateBtn.addEventListener("click", calculate);
window.addEventListener("load", calculate);

let clear1=() => {
    p=null;
    r=null;
    t=null;
    duration=null;
    simpleInterest=null;
    amount=null;
    document.getElementById("principal").value="";
    document.getElementById("rate").value="";
    document.getElementById("time").value="";
    result.innerHTML=""
}
clearButton.addEventListener("click", clear1);
window.addEventListener("load", clear1);