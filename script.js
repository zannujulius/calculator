const btn = document.querySelectorAll(".rounded-full div");
const process = document.querySelector(".result");
const error = document.querySelector(".error");

var calc = "";

document.querySelector("#back").addEventListener("click", () => {
  let arr = calc.slice(0, calc.length - 1);
  // calc = arr;
  let res = arr.split("").map((i) => {
    return numChecker(i);
  });

  let ans = "";
  for (var i = 0; i < res.length; i++) {
    calc += numChecker(i);
  }
  calc = ans;
});

document.querySelector("#equal").addEventListener("click", () => {
  try {
    if (!calc) return null;
    process.textContent = String(eval(calc));
    calc = "";
  } catch (err) {
    error.textContent = err.message;
    console.log(err.message);
  }
});
document.querySelector("#clear").addEventListener("click", () => {
  calc = "";
  process.textContent = "0";
  error.textContent = "";
});

function numChecker(num) {
  switch (num) {
    case "9":
      return 9;
    case "8":
      return 8;
    case "7":
      return 7;
    case "6":
      return 6;
    case "5":
      return 5;
    case "4":
      return 4;
    case "3":
      return 3;
    case "2":
      return 2;
    case "1":
      return 1;
    default:
      return num;
  }
}

function handleClick(e) {
  let input = e.target.textContent;
  if (input == "=") return null;
  calc += numChecker(input);
  process.textContent = calc;
}

btn.forEach((button) => {
  button.addEventListener("click", handleClick);
});
