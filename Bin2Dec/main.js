var number = document.querySelector('#num');
var numValue = parseInt(number.value);

function isBinary(x) {
  // Validate number fieldlog
  return (x == 1 || x == 0);
}

function Bin2Dec() {
  let verify = isBinary(numValue);
  if (verify) {
    alert(numValue);
  } else {
    alert('invalid value!');
    number.value = '';
  }
}

number.onchange = Bin2Dec;