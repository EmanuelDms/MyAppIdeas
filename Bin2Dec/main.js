var number = document.querySelector('#num');

function validateNum(x) {
  // Validate number field
  if (x === '') {
    return false;
  } else if (x !== 1 || x !== 0) {
    return false;
  }
  return true;
}

function Bin2Dec() {
  let verify = validateNum(number.value);
  alert(verify ? number.value : 'invalid value!')
}

number.onchange = Bin2Dec;