let celsiusInput = document.getElementById("celsius");
let fahrenheitInput = document.getElementById("fahrenheit");
let kelvinInput = document.getElementById("kelvin");

celsiusInput.addEventListener('input', cels2other);
fahrenheitInput.addEventListener('input', fahr2other);
kelvinInput.addEventListener('input', kelv2other);

function cels2other() {
  let cTemp = parseFloat(celsiusInput.value);
  let fTemp = (cTemp * 9/5) + 32;
  let kTemp = cTemp + 273.15;
  fahrenheitInput.value = fTemp;
  kelvinInput.value = kTemp;
}
function fahr2other() {
  let fTemp = parseFloat(fahrenheitInput.value);
  let cTemp = (fTemp - 32) * 5/9;
  let kTemp = (fTemp - 32) * 5/9 + 273.15;
  celsiusInput.value = cTemp;
  kelvinInput.value = kTemp;
}
function kelv2other() {
  let kTemp = parseFloat(kelvinInput.value);
  let cTemp = kTemp - 273.15;
  let fTemp = (kTemp - 273.15) * 9/5 + 32;
  celsiusInput.value = cTemp;
  fahrenheitInput.value = fTemp;
}
