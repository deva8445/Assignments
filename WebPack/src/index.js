import "./index.css";

let h1 = document.createElement("h1");
h1.textContent = "webpack Assignment of Unit 5";
h1.setAttribute("class","text");
let img = document.createElement("img");
img.src = "https://cdn.logo.com/hotlink-ok/logo-social.png";
img.setAttribute("class","image");
document.getElementById("root").append(img,h1);
