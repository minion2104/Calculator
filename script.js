let input = document.getElementById("box");
let buttons = document.querySelectorAll("button");
let s = "";
let a = Array.from(buttons);
a.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      s = eval(s);
      input.value = s;
    } else if (e.target.innerHTML == "AC") {
      s = "";
      input.value = s;
    } else if (e.target.innerHTML == "DEL") {
      s = s.substring(0, s.length - 1);
      input.value = s;
    } else {
      s += e.target.innerHTML;
      input.value = s;
    }
  });
});
