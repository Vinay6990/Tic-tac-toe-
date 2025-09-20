let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#knau");
let msg = document.querySelector(".msg");
let turnO = true;

const pattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const showWinner = (winner) => {
  msg.innerText = `Congrats winner is : ${winner}`;
  msg.classList.remove("hide");
};

const checkWinner = () => {
  for (let patternArr of pattern) {
    let [a, b, c] = patternArr;
    let var1 = boxes[a].innerText;
    let var2 = boxes[b].innerText;
    let var3 = boxes[c].innerText;

    if (var1 !== "" && var1 === var2 && var2 === var3) {
      showWinner(var1);

      boxes.forEach((box) => (box.disabled = true));
    }
  }
};

const enable = () => {
  boxes.forEach((box) => {
    box.disabled = false;
    box.innerText = "";
  });
};

const reset = () => {
  turnO = true;
  enable();
  msg.classList.add("hide");
};

resetBtn.addEventListener("click", reset);
