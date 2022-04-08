let array = {
  V: ["Violet", "#9400D3"],
  I: ["Indigo", "#4B0082"],
  B: ["Blue", "#0000FF"],
  G: ["Green", "#00FF00"],
  Y: ["Yellow", "#FFFF00"],
  O: ["Orange", "#FF7F00"],
  R: ["Red", "#FF0000"],
};

let natural = {
  Violet: "V",
  Indigo: "I",
  Blue: "B",
  Green: "G",
  Yellow: "Y",
  Orange: "O",
  Red: "R",
};

document.querySelectorAll(".Vibgyor").forEach(x => {
  x.addEventListener("mouseover", () => {
    let last = x.innerText;
    x.style.backgroundColor = `${array[last][1]}`;
    x.innerText = `${array[last][0]}`;
  });
    x.addEventListener("mouseout", () => {
      let last = x.innerText;
      x.style.backgroundColor = `white`;
      x.innerText = `${natural[last]}`;
    });
});








