(function () {
  let screen = document.querySelector(".screen");
  let buttons = document.querySelectorAll(".btn");
  let operators = document.querySelector(".btn-operator");
  let clear = document.querySelector(".btn-clear");
  let equal = document.querySelector(".btn-equal");

  buttons.forEach(function (button) {
    button.addEventListener("click", function (e) {
      let value = e.target.dataset.num;
      screen.value += value;
    });
  });

  equal.addEventListener("click", function (e) {
    if (screen.value !== "") {
      let answer = eval(screen.value);
      screen.value = answer;
    }
  });

  operators.addEventListener("click", function (e) {
    const operatorsArr = ["+", "-", "/", "*"];
    let len = screen.value.length;
    let lastchar = screen.value.substring(len - 1, len);
    if (operatorsArr.includes(lastchar)) {
    }
    // screen.value lastchari yeni operatorle degis
  });

  clear.addEventListener("click", function (e) {
    screen.value = "";
  });
})();
