let value = "";
const a = document.getElementsByTagName("button");
for (let i = 0; i < a.length; i++) {
  a[i].addEventListener("click", () => {
    const input = document.getElementById("value");

    if (a[i].textContent == "clear") {
      value = "";
    } else if (a[i].textContent == "DEL") {
      value = value.slice(0, -1);
    } else if (a[i].textContent == "=") {
      value = eval(value);
      console.log("sad");
    } else if (
      a[i].textContent == "+" ||
      a[i].textContent == "-" ||
      a[i].textContent == "*" ||
      a[i].textContent == "/"
    ) {
      if (
        value.length > 0 &&
        (value[value.length - 1] == "+" ||
          value[value.length - 1] == "-" ||
          value[value.length - 1] == "*" ||
          value[value.length - 1] == "/")
      ) {
      } else {
        value += a[i].textContent;
      }
    } else {
      value += a[i].textContent;
    }

    input.value = value;
  });
}
