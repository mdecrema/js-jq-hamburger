// Associo una variabile al tasto hamburger, al menu Hamburger e al tasto chiudi
var hamBtn = $(".header-right > a");
var hamMenu = $(".hamburger-menu");
var close = $(".close");

// Apri menu
btn.click(function() {
  hamMenu.show(700);
});

// Chiudi menu
close.click(function() {
  hamMenu.hide(500);
})
