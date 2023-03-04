 

document.getElementById('boton').addEventListener('click', function() {
    document.body.style.backgroundColor = '#DAB2EA'
});

   
document.getElementById('boton1').onclick = function () {
  console.log ('capturamos el evento click');
  document.getElementById("demo").innerHTML = "GRACIAS!!!!"
};

const $form = document.querySelector("#form");
const $buttonMailto = document.querySelector('#trucazo')

$form.addEventListener("submit", handlesubmit);

function handlesubmit(event) {
  event.preventDefault();
  const form = new FormData(this);
  console.log(form.get("names"));
  $buttonMailto.setAttribute ('href', 'mailto:laurapezzutti18@gmail.com?subject=${form.get('names')}${form.get('email')}&body=${form.get('mensaje')}')
  $buttonMailto.click()
}