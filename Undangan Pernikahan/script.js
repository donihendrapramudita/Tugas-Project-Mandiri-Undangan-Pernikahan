// ===== NAVBAR =====
var navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
  if (window.scrollY > 40) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// ===== MENU HP =====
var menu = document.getElementById("menu");
var linkMenu = document.querySelectorAll("#menu a");

for (var i = 0; i < linkMenu.length; i++) {
  linkMenu[i].addEventListener("click", function () {
    if (menu.classList.contains("show")) {
      bootstrap.Collapse.getOrCreateInstance(menu).hide();
    }
  });
}

// ===== FORM RSVP =====
var form = document.getElementById("form-rsvp");
var terimaKasih = document.getElementById("terima-kasih");
var tombolLagi = document.getElementById("tombol-lagi");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  var nama = document.getElementById("nama").value.trim();
  var hadir = document.getElementById("hadir").value;
  var errorNama = document.getElementById("error-nama");
  var errorHadir = document.getElementById("error-hadir");
  var semuaBenar = true;

  if (nama === "") {
    errorNama.hidden = false;
    semuaBenar = false;
  } else {
    errorNama.hidden = true;
  }

  if (hadir === "") {
    errorHadir.hidden = false;
    semuaBenar = false;
  } else {
    errorHadir.hidden = true;
  }

  if (semuaBenar) {
    form.hidden = true;
    terimaKasih.hidden = false;
  }
});

tombolLagi.addEventListener("click", function () {
  form.reset();
  terimaKasih.hidden = true;
  form.hidden = false;
});
