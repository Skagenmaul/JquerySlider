
$("#window").css("overflow", "hidden");
// om javascript är "av" kommer denna rad inte att köras , då blir alla bilder synliga
// jag har även ändrat i css en gällande overflow. detta kommer att leda till att bilderna blinkar till och syns
// en kort stund innan javascriptet ser till att de får hidden. så i detta fall kan denna javascript kod behöva placeras
// tidigare i html dokumnetet exempelvis i header så att de läses in innan man ritat ut html objekten på skärmen.
$("a").show();
$("nav").show();
var x = 0;
//.show säger att alla a & nav-taggar ska visas när javascript läses in. Om javascript är avstängt kommer taggarna inte visas.  
// Här skapas även variabeln 'x' och tilldelas värdet 0. Denna variabeln används senare för att hålla reda på vilken slide man är på.
  
//Följande kod säger: När man klickar på knappen 'next' ska alla bilder förflyttas 322px uppåt sålänge som x inte är större än 2. Då blir x = x+1.
//Om x är större eller lika med två ska bilderna 'reset:as' tillbaka till då bottom är 0. Då blir x även lika med 0.
$(".next").click(function(){

// console.log(x);

  if (x>=2) {
    $("#imgs").animate({bottom: "0"});
    x = 0;
  }

else {
  x = x+1;
      $("#imgs").animate({bottom: "+=322"});
}
});


//Följande kod säger att om 'prev', alltså knappen till vänster, aktiveras ska bilderna förflyttas 322px nedåt. 
//Om x = eller < än 0 ska bilderna flyttas till max-värdet (644px) och tilldelas värdet 2. Om inte ska bilderna flyttas 322px nedåt och x blir x-1.
$(".prev").click(function(){

// console.log(x + " HEJ");

if (x<=0) {
  $("#imgs").animate({bottom: "644"});
  x = 2;
}

else {
  x= x-1;
      $("#imgs").animate({bottom: "-=322"});
}
});
//Mer kod behövs inte för att få sliderna att fungera. Självklart skulle man lätt kunna lägga till punkter som säger vilken bild man är på
//men detta kändes orelevant då urvalet inte var särskillt stort. Man skulle lätt kunna lägga till punkterna i en Ol alternativt Li och ta
//del av x-variabeln för att säga vilken slide man är på. Förflyttning mellan punkterna skulle kunna genomföras mha .animate eller liknande.  
