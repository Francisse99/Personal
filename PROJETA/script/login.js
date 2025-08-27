var btn = document.querySelector("form");
var res = document.getElementById("res");

btn.addEventListener("submit", check);
btn.addEventListener("input", inputPre);
btn.addEventListener("input", inputmdp);

function check(event) {
  event.preventDefault();
  var prenom = document.getElementById("prenom").value.trim();
  var mdp = document.getElementById("mdp").value;

  if (prenom == "Larah" && mdp == "Larah77") {
    cheked();
    setTimeout(link, 1500);
  } else {
    uncheked();
  }
}
function link() {
  window.location.href = "../pages/accueil.html";
}
function cheked() {
  let message = "BIENVENUE LARAH";
  let boxMsg = document.getElementById("msg");
  let pop = document.getElementById("pop");
  boxMsg.style.color = "rgb(255, 26, 117)";
  boxMsg.textContent = message;
  pop.style.display = "block";
}

function uncheked() {
  let message = "IDENTIFIANTS INCORRECTS";
  let boxMsg = document.getElementById("msg");
  let pop = document.getElementById("pop");
  boxMsg.style.color = "red";
  boxMsg.textContent = message;
  pop.style.display = "block";
}

function inputPre(e) {
  e.preventDefault();
  let prenom = document.getElementById("prenom").value;
  if (prenom == "Larah") {
    document.getElementById("prenom").style.border = " 1px solid green";
  } else {
    document.getElementById("prenom").style.border = "1px solid red";
  }
}

function inputmdp(e) {
  e.preventDefault();
  let mdp = document.getElementById("mdp").value;
  if (mdp == "Larah77") {
    document.getElementById("mdp").style.border = " 1px solid green";
  } else {
    document.getElementById("mdp").style.border = "1px solid red";
  }
}
