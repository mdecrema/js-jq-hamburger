// Associo una variabile al tasto hamburger, al menu Hamburger e al tasto chiudi
var hamBtn = $(".header-right > a");
var hamMenu = $(".hamburger-menu");
var close = $(".close");

// Apri menu
hamBtn.click(function() {
  hamMenu.css({display:'block'});
});

// Chiudi menu
close.click(function() {
  hamMenu.css({display:'none'});
});
