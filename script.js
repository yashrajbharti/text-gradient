//Some classes and html functions need to determine a constant
let css = document.querySelector(".codess"); // color code
let color1 = document.querySelector(".color1"); // 1st color
let color2 = document.querySelector(".color2"); // 2nd color
let bodys = document.getElementById("gradient"); // color display
let linearDirection = document.getElementsByName("toDirection")[0]; //Select box
let cancel = document.querySelector(".cancel");
//displays default CSS RGBA values for linear-gradient

function currentSettings() {
  let CSSprop = window
    .getComputedStyle(bodys, null)
    .getPropertyValue("background-image");
  css.textContent = CSSprop;
}

currentSettings();
//You have to make arrangements to see the color code in the display

function returnColor() {
  bodys.style.backgroundImage =
    "linear-gradient(" +
    linearDirection.value +
    ", " +
    color1.value +
    "," +
    color2.value +
    ")";
  currentSettings();
}
css.addEventListener("input", () => {
  bodys.style.backgroundImage = css.textContent;
});
document.querySelector('select[name="toDirection"]').onchange = returnColor;
color1.addEventListener("input", returnColor);
color2.addEventListener("input", returnColor);

cancel.style.display = "none";
let fileTag = document.getElementById("filetag"),
  preview = document.getElementById("preview");

fileTag.addEventListener("change", function () {
  changeImage(this);
});

function changeImage(input) {
  let reader;

  if (input.files && input.files[0]) {
    reader = new FileReader();

    reader.onload = function (e) {
      preview.setAttribute("src", e.target.result);
      preview.style.display = "block";
      cancel.style.display = "block";
    };

    reader.readAsDataURL(input.files[0]);
  }
}
function hidestuff() {
  cancel.style.display = "none";
  preview.style.display = "none";
}

let up = false,
  right = false,
  down = false,
  left = false,
  x = window.innerWidth / 2 - 130 / 2,
  y = window.innerHeight / 2 - 130 / 2;
document.addEventListener("keydown", press);
function press(e) {
  if (e.code === "KeyW" /* w */) {
    up = true;
  }
  if (e.code === "KeyD" /* d */) {
    right = true;
  }
  if (e.code === "KeyS" /* s */) {
    down = true;
  }
  if (e.code === "KeyA" /* a */) {
    left = true;
  }
}
document.addEventListener("keyup", release);
function release(e) {
  if (e.code === "KeyW" /* w */) {
    up = false;
  }
  if (e.code === "KeyD" /* d */) {
    right = false;
  }
  if (e.code === "KeyS" /* s */) {
    down = false;
  }
  if (e.code === "KeyA" /* a */) {
    left = false;
  }
}
function gameLoop() {
  let div = document.querySelector("#move");
  if (up) {
    y = y - 20;
  }
  if (right) {
    x = x + 20;
  }
  if (down) {
    y = y + 20;
  }
  if (left) {
    x = x - 20;
  }
  div.style.left = x + "px";
  div.style.top = y + "px";
  window.requestAnimationFrame(gameLoop);
}
window.requestAnimationFrame(gameLoop);

let buildCanvas = () => {
  let canvasColors = window
    .getComputedStyle(bodys, null)
    .getPropertyValue("background-image");

  let canvasFont = window
    .getComputedStyle(bodys, null)
    .getPropertyValue("font")
    .split(" ")[1];

  let canvasarray = canvasColors.split(",");
  let canvasColor1 =
    canvasarray[1] + "," + canvasarray[2] + "," + canvasarray[3];
  let canvasColor2 =
    canvasarray[4] + "," + canvasarray[5] + "," + canvasarray[6].slice(0, -1);

  const c = document.getElementById("theCanvas");
  const ctx = c.getContext("2d");
  ctx.clearRect(0, 0, ctx.width, ctx.height);
  c.height = bodys.clientHeight * 4;
  c.width = bodys.clientWidth * 4;
  ctx.font = `bold ${parseInt(canvasFont) * 4}px 'Montserrat', sans-serif`;

  // Create gradient
  let gradient = ctx.createLinearGradient(0, 0, c.width, 0);
  gradient.addColorStop("0", canvasColor1);
  gradient.addColorStop("1.0", canvasColor2);

  // Fill with gradient
  ctx.fillStyle = gradient;
  ctx.fillText(bodys.textContent, 10, 480);
};
