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
  // console.log(CSSprop)
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
  const c = document.getElementById("theCanvas");
  const ctx = c.getContext("2d");
  ctx.font = "bold 110px 'Montserrat', sans-serif";

  // Create gradient
  let gradient = ctx.createLinearGradient(0, 0, c.width, 0);
  gradient.addColorStop("0", "#FC558F");
  gradient.addColorStop("1.0", "#FF8A83");

  // Fill with gradient
  ctx.fillStyle = gradient;
  ctx.fillText("Sweet Candy", 10, 90);
};

buildCanvas();
