// console.log('Hi there!🔥');

window.addEventListener('DOMContentLoaded', () => {
  const shit = '💩',
    fire = '🔥',
    rocket = '🚀',
    poudzo = '👍🏻';
  // console.log(rocket);

  // referenza numeri
  const numericButtons = document.querySelectorAll('.numeric-button');

  // referenza funzioni
  const functionButtons = document.querySelectorAll(
    `.function-button:not(span[data-value='='], span[data-value='ac'])`
  );

  // referenza display
  const display = document.getElementById('display');

  //referenza =
  const equal = document.querySelector(`span[data-value='=']`);

  //referenza AC
  const ac = document.querySelector(`span[data-value='ac']`);

  // memoria app
  const memory = [];

  //functions
  const getNum = (e) => {
    console.log(e.target.getAttribute('data-value'));

    // return valueOfNum;
  };

  const getFun = (e) => {
    console.log(e.target);

    // return valueOfFun;
  };

  const performOperation = (e) => {
    console.log(e.target);
  };

  const resetOperation = (e) => {
    console.log(e.target);
  };

  const renderNum = () => {};

  // operations functions

  const sum = (a, b) => a + b;
  const divide = (a, b) => a / b;
  const multiply = (a, b) => a * b;
  const subtract = (a, b) => a - b;

  //eventlisteners
  numericButtons.forEach((btn) => btn.addEventListener('click', getNum));
  functionButtons.forEach((btn) => btn.addEventListener('click', getFun));
  equal.addEventListener('click', performOperation);
  ac.addEventListener('click', resetOperation);
});
