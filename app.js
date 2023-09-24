let weight = document.getElementById("weight");
let height = document.getElementById("height");
let result = document.getElementById("result");
let scale = document.getElementById("scale");
let hinfet = document.getElementById("heightinfeet");
let rescont = document.getElementById("rescont");
rescont.classList.add('dnone');


function calculate() {
  if (height.value == "") {
    let fttom = hinfet.value * 0.3048;
    let heitsqr = fttom * fttom;
    let bmi = (weight.value / heitsqr).toFixed(2);
    rescont.classList.remove('dnone');
    result.innerText = bmi;
    massindextype(bmi);
  } 

  else {

    let heitsqr = height.value * height.value;
    let bmi = (weight.value / heitsqr).toFixed(2);
    rescont.classList.remove('dnone');
    result.innerText = bmi;
    massindextype(bmi);
  }
}

function massindextype(e) {
  if (e <= 18.5) {

    scale.innerText = "Under weight";
  } else if (e > 18.5 && e <= 25) {
   
    scale.innerText = "Normal weight";
  } else if (e > 25 && e <= 29.9) {
  
    scale.innerText = "Overweight";
  } else if (e > 30 && e < 35) {
   
    scale.innerText = "Obesity";
  } else {
   
    scale.innerText = "Severe obesity";
  }
}
