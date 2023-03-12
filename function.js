document.getElementById("boton").addEventListener("click", function () {
  document.body.style.backgroundColor = "#DAB2EA";
});

document.getElementById("boton1").onclick = function () {
  console.log("capturamos el evento click");
  document.getElementById("demo").innerHTML = "Gracias";
};

document.getElementById("DATOSPERSONALES1").onclick = function () {
  console.log("capturamos el evento click");
  document.getElementById("DATOSPERSONALES1").innerHTML =
    "<p><li>NOMBRE Y APELLIDO: LAURA PEZZUTTI.</li><li>EDAD: 38 AÑOS.</li><li>FECHA DE NACIMIENTO: 13 DE JUNIO 1984.</li><li>DNI: 30.587.021.</li><li>DOMICILIO: Francisco Moyano 2864 CIUDAD de Mendoza.</li><li>TELÉFONO: 2615101648.</li></p>";
};

document.getElementById("EXPECTATIVAS1").onclick = function () {
  console.log("capturamos el evento click");
  document.getElementById("EXPECTATIVAS1").innerHTML =
    "<p>Mi formación universitaria y mi desempeño profesional están relacionados con las ciencias humanas.</p><p>Sin embargo, soy una persona caracterizada por la curiosidad y la necesidad de aprender siempre cosas nuevas.</p>";
};

document.getElementById("FORMACION1").onclick = function () {
  console.log("capturamos el evento click");
  document.getElementById("FORMACION1").innerHTML =
    "<p>Educación Universitaria: Lic. en Trabajo Social. Universidad Nacional de cUYO. Mendoza (Egresada 2010).</p>";
};

document.getElementById("EXPERIENCIA1").onclick = function () {
  console.log("capturamos el evento click");
  document.getElementById("EXPERIENCIA1").innerHTML =
    "<p><li>Instituto Provincial de la Vivienda (2007-Actualidad).</li><li>Poder Judicial Mendoza. Perito Social (2021-Actualidad).</li><li>Asociación Mendocina de Esclerosis Múltiple (2012-2013).</li></p>";
};
