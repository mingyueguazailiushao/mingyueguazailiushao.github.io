let myimage = document.querySelector("img");

myimage.onclick = function () {
  let mysrc = myimage.getAttribute("src");
  if (mysrc === "images/1.jpg") {
    myimage.setAttribute("src", "images/2.jpg");
  } else {
    myimage.setAttribute("src", "images/1.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1")

function setusername() {
  let myname = prompt("请输入你的名字。");
  if (!myname) {
    setusername();
  } else {
    localStorage.setItem("name", myname);
    myHeading.textContent = "你好, " + myname;
  }
}

if (!localStorage.getItem("name")) {
    setusername();
} else {
  let storedname = localStorage.getItem("name");
  myHeading.textContent = "你好, " + storedname;
}

myButton.onclick = function () {
  setusername();
};

  
