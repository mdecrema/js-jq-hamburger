// Associo una variabile al tasto hamburger, al menu Hamburger e al tasto chiudi
var btn = $(".header-right > a");
var hamMenu = $(".hamburger-menu");
var close = $(".close");

// Apri menu
btn.click(function() {
  hamMenu.show();
});

// Chiudi menu
close.click(function() {
  hamMenu.hide();
})
