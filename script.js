let previousBtn = document.getElementById("previous-button");
let nextBtn = document.getElementById("next-button");
let primeNumber = document.getElementById("prime-number");
let primeArray = [2];
let currentIndex = 0;

nextBtn.addEventListener("click", function displayNextPrime() {
    if (currentIndex === primeArray.length - 1) {
    nextPrimeNumber();
    const lastIndexInArray = primeArray.length - 1;
    const lastPrimeNumberInArray = primeArray[lastIndexInArray];
    primeNumber.innerText = lastPrimeNumberInArray;
    console.log(`Array after running nextPrimeNumber: ${primeArray}`)
    } else { currentIndex += 1;
    primeNumber.innerText = primeArray[currentIndex]; 
    console.log(`After not running nextPrimeNumber ${primeArray}`)}
});

previousBtn.addEventListener("click", function displayPreviousPrime() {
  if (currentIndex !== 0) {
    currentIndex -= 1;
    primeNumber.innerText = primeArray[currentIndex];
  }
})

function isPrimeNumber(currentNumber) {

  if (currentNumber === 2) {
    return true;
  }

  if (currentNumber % 2 === 0) {
    return false;
  }

  for (let i = 3; i <= Math.sqrt(currentNumber); i++) {
    if (currentNumber % i === 0) {
      return false;
    }
  }

  return true;
}

function nextPrimeNumber() {
  for (let i = primeArray[currentIndex] + 1; true; i++) {
    if (isPrimeNumber(i) === true) {
      console.log(i);
      primeArray.push(i);
      currentIndex += 1;
      return i;
    }
  }
}

// the goal is to make the number on the page go up and down between prime numbers when you hit one of the buttons
