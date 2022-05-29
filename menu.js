function hambu() {
  document.getElementById("barra3").style.width = '22px';
  document.getElementById("barra3").style.left = '0px';
}

function retrohambu() {
  var x = document.getElementById("myLinks");

  if (x.style.height === "100vh") {

    document.getElementById("barra3").style.width = '22px';
    document.getElementById("barra3").style.left = '0px';

  } else {
    document.getElementById("barra3").style.width = '13px';
    document.getElementById("barra3").style.left = '9px';
  }

}



function animazionemenu(x) {
  x.classList.toggle("change");
}



function myFunction() {
  var x = document.getElementById("myLinks");
  var y = document.getElementById("footer");

  document.getElementById("logotag").classList.toggle("nonno");
  document.getElementById("logotag2").classList.toggle("blocco");
  document.getElementById("piede").classList.toggle("white");
  document.getElementById("piede2").classList.toggle("white");
  document.getElementById("piede3").classList.toggle("white");

  if (x.style.height === "100vh") {
    x.style.height = "0vh";
    document.body.style.overflow = 'auto';
        document.getElementById("topnav").classList.toggle("PRE2");
        document.getElementById("clinks").style.display = 'none';
        y.classList.remove("fixed");

  } else {
    x.style.height = "100vh";
    document.body.style.overflow = 'hidden';
    document.getElementById("topnav").classList.toggle("PRE2");
    document.getElementById("clinks").style.display = 'block';
    y.classList.add("fixed");

  }
}
