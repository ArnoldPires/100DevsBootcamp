//Have the browser listen for all button presses and record them in the console
const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calcKeys')
keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const key = e.target;
        const action = key.dataset.action;
        if (!action) {
          console.log("number key!");
        }
        if (
          action === "add" ||
          action === "subtract" ||
          action === "multiply" ||
          action === "divide"
        ) {
          console.log("operator key!");
        }
        if (action === "decimal") {
          console.log("decimal key!");
        }
        if (action === "clear") {
          console.log("clear key!");
        }
        if (action === "calculate") {
          console.log("equal key!");
        }
    }
})
//When a number is clicked, it will change the 0 to that number
const display = document.querySelector('.calcDisplay')
keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
      const key = e.target;
      const action = key.dataset.action;
      const keyContent = key.textContent;
      const displayNum = display.textContent;
      //When another number is clicked, that number will be added next to the first number, and so on
      if (!action) {
        if (displayNum === "0") {
          display.textContent = keyContent;
        } else {
          display.textContent = displayNum + keyContent;
        }
      }
      //If the user clicks the decimal key it should appear
      //If any number is clicked after the decimal key, it should appear to the right of it
      if (action === "decimal") {
        display.textContent = displayNum + ".";
      }
      //When the decimal key gets clicked, allow the user to continue adding numbers if they want
      if (
        action === "add" ||
        action === "subtract" ||
        action === "multipy" ||
        action === "divide"
      ) {
        key.classList.add("is-depressed");
      }
      //Allow only one decimal click per number
      keys.addEventListener("click", (e) => {
        if (e.target.matches("button")) {
          const key = e.target;
          Array.from(key.parentNode.children).forEach((k) =>
            k.classList.remove("is-depressed")
          );
        }
      });
    }
})