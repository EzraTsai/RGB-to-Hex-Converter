//////// 設定節點參數 ////////
const redslider = document.querySelector("#red-myRange");
const redoutput = document.querySelector("#red-demo");
const greenslider = document.querySelector("#green-myRange");
const greenoutput = document.querySelector("#green-demo");
const blueslider = document.querySelector("#blue-myRange");
const blueoutput = document.querySelector("#blue-demo");
const hexColorCode = document.querySelector("#hexColor");

//////// 滑標對應rgb數字 ////////
redoutput.innerHTML = redslider.value;
greenoutput.innerHTML = greenslider.value;
blueoutput.innerHTML = blueslider.value;

//////// 背景顏色 ////////
function bgColor() {
  return (document.body.style.backgroundColor = hexColorCode.innerText);
}

//////// 紅色滑標 ////////
redslider.oninput = function() {
  redoutput.innerHTML = this.value;
  rgbToHex();
  bgColor();
}

//////// 綠色滑標 ////////
greenslider.oninput = function() {
  greenoutput.innerHTML = this.value;
  rgbToHex();
  bgColor();
}

//////// 藍色滑標 ////////
blueslider.oninput = function() {
  blueoutput.innerHTML = this.value;
  rgbToHex();
  bgColor();
}

//////// rgb轉Hex程式 ////////
function rgbToHex() {
  let redValue = Number(redslider.value).toString(16);
  let greenValue = Number(greenslider.value).toString(16);
  let blueValue = Number(blueslider.value).toString(16);
  return (hexColorCode.innerHTML = `#${redValue.padStart(2,"0")}${greenValue.padStart(2, "0")}${blueValue.padStart(2, "0")}`);
}

//////// 初始背景色 ////////
bgColor()





