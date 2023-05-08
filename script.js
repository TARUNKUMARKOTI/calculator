
const result = document.getElementById('result');
const history = document.getElementById('history');
let ans = 0;

function insertValue(value) {
  if (result.value === 'Error') {
    result.value = '';
  }
  if (result.value === '' && value === '.') {
    result.value = '0';
  }
  if (result.value.charAt(result.value.length - 1) === '/' && value === '0') {
    result.value = 'Error';
    return;
  }
  if (result.value.charAt(result.value.length - 1) === ')' && !isNaN(value)) {
    return;
  }
  if (value === 'Math.sqrt(') {
    result.value += value;
    history.value += '√(';
    return;
  }
  result.value += value;
}

function clearScreen() {
  result.value = '';
  history.value = '';
}

function deleteChar() {
  if (result.value === 'Error') {
    result.value = '';
  }
  result.value = result.value.slice(0, -1);
  history.value = history.value.slice(0, -1);
}



function calculate() {
  if (result.value === 'Error') {
    result.value = '';
  }
  try {
    let res = eval(result.value);
    if (isNaN(res) || !isFinite(res)) {
      res = 'Error';
    }
    ans = res;
    history.value += `${result.value}`;
    result.value = res;
  } catch (e) {
    result.value = 'Error';
  }
}




