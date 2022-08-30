const interedValue = document.querySelector('.numberToCovert');
const convertBtn = document.querySelector('.convert-btn');
let lengthPara = document.querySelector('.lengthResult');
let volumePara = document.querySelector('.volumeResult');
let massPara = document.querySelector('.massResult');

convertBtn.addEventListener('click', () => {
  let value = parseInt(interedValue.value);
   length(value);
   volume(value);
   mass(value);
})

/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

function length(number) {
    let toFeet = (number * 3.281).toFixed(2);
    let toMeter = (number / 3.281).toFixed(2)
    lengthPara.innerHTML = `${number} meters = ${toFeet} feet |
     ${number} feet = ${toMeter} meters`;
}

function volume(number) {
    let togallon = (number * 0.264).toFixed(2);
    let toliter = (number / 0.264).toFixed(2)
    volumePara.innerHTML = `${number} liter = ${togallon} gallons |
     ${number} gallons = ${toliter} liters`;
}
function mass(number) {
    let toPound = (number * 2.204).toFixed(2);
    let toKilogram = (number / 2.204).toFixed(2)
    massPara.innerHTML = `${number} kilos = ${toPound} pounds |
     ${number} pounds = ${toKilogram} Kilos`;
}
