document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const menu = document.querySelector('.menu');
  const spans = document.querySelectorAll('.span');

  hamburger.addEventListener('click', function() {
    menu.classList.toggle('menu--open');
    spans.forEach(span => span.classList.toggle('span--white'));
  });

  document.querySelectorAll('li').forEach(li => {
    li.addEventListener('click', function() {
      menu.classList.toggle('menu--open');
      spans.forEach(span => span.classList.toggle('span--white'));
    });
  });

  ScrollReveal().reveal(".reveal", {
    distance: "50px", 
    duration: 800, 
    easing: "cubic-bezier(.215, .61, .355, 1)", 
    interval: 500
  });

  ScrollReveal().reveal(".zoom", {
    duration: 1500, 
    easing: "cubic-bezier(.215, .61, .355, 1)", 
    interval: 200, 
    scale: 0.65
  });

  window.addEventListener('scroll', function() {
    const logo = document.querySelector('.logo');
    if (window.scrollY > 50) {
      logo.style.display = 'none';
    } else {
      logo.style.display = 'block';
    }
  });
});
function verificaEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function controlloForm() {
  var nome = document.forms["formmail"]["nome"].value;
  var email = document.forms["formmail"]["email"].value;
  var tel = document.forms["formmail"]["tel"].value;
  var msg = document.forms["formmail"]["msg"].value;

  if (nome === "" || email === "" || msg === "") {
    alert("I campi Nome, Email e Messaggio sono obbligatori!");
    return false;
  } else if (!verificaEmail(email)) {
    alert("L'indirizzo email non sembra corretto!");
    return false;
  } else {
    return true;
  }
}
