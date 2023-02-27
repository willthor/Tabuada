function validation() {
  let numb1 = document.getElementById("first");
  let res = document.getElementById("res");

  if (numb1.value == 0) {
    alert("Check os campos e tente novamente");
  } else {
    let one = Number(numb1.value);
    res.innerHTML = "";

    for (let c = 1; c <= 10; c++) {
      let item = document.createElement("option");
      item.text = `${c} x ${one} = ${one * c}`;
      res.appendChild(item);
    }
  }
}
function erase() {
  let res = document.getElementById("res");
  let numb1 = document.getElementById("first");
  if (numb1.value.length) {
    res.innerHTML = "";
    numb1.value = "";
  } else {
    alert("Nada a zerar");
  }
}
