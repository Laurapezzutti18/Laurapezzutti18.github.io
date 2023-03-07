document.getElementById("boton").addEventListener("click", function () {
  document.body.style.backgroundColor = "#DAB2EA";
});

document.getElementById("boton1").onclick = function () {
  console.log("capturamos el evento click");
  document.getElementById("demo").innerHTML = "Gracias";
};
