console.log("initial script");

$( document ).ready(function(){
$("#iconSend").click(invioMsg);




// funzione di invio messaggio
function invioMsg () {
  var invioUtente = $("#myText").val();
  console.log(invioUtente);

  var templateTemp = $(".template .verdi").clone();
  templateTemp.text(invioUtente);
  $(".msg_container").append(templateTemp);
  console.log(templateTemp);

  setTimeout(function() {

    var templateTemp2 = $(".template .bianchi").clone();
    templateTemp2.text("ok");
    $(".msg_container").append(templateTemp2);
  }, 1000);

  invioUtente = $("#myText").val("");
}
});
