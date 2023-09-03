//Some classes and html functions need to determine a constant
var css = document.querySelector(".codess"); // color code
var color1 = document.querySelector(".color1"); // 1st color
var color2 = document.querySelector(".color2"); // 2nd color
var bodys = document.getElementById("gradient"); // color display
var linearDirection = document.getElementsByName("toDirection")[0]; //Select box
var cancel = document.querySelector(".cancel");
//displays default CSS RGBA values for linear-gradient

function currentSettings() {
  var CSSprop = window
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
var fileTag = document.getElementById("filetag"),
  preview = document.getElementById("preview");

fileTag.addEventListener("change", function () {
  changeImage(this);
});

function changeImage(input) {
  var reader;

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

var up = false,
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
  var div = document.querySelector("#move");
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
