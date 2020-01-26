

$("#window").css("overflow", "hidden");
$("a").show();
$("nav").show();
var x = 0;
// om javascript är "av" kommer denna rad inte att köras , då blir alla bilder synliga
// jag har även ändrat i css en gällande overflow. detta kommer att leda till att bilderna blinkar till och syns
// en kort stund innan javascriptet ser till att de får hidden. så i detta fall kan denna javascript kod behöva placeras
// tidigare i html dokumnetet exempelvis i header så att de läses in innan man ritat ut html objekten på skärmen.



$(".next").click(function(){

console.log(x);

  if (x>=2) {
    $("#imgs").animate({bottom: "0"});
    x = 0;
  }

else {
  x = x+1;
      $("#imgs").animate({bottom: "+=322"});
}
});



$(".prev").click(function(){

console.log(x + " HEJ");

if (x<=0) {
  $("#imgs").animate({bottom: "644"});
  x = 2;
}

else {
  x= x-1;
      $("#imgs").animate({bottom: "-=322"});
}
});
