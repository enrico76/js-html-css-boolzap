console.log("initial myscript");

$( document ).ready(function(){
$("#iconSend").click(invioMsg);




// funzione di invio messaggio
function invioMsg () {
  var invioUtente = $("#myText").val();
  console.log(invioUtente);

  var templateTemp = $("#template .verdi").clone();
  templateTemp.text(invioUtente);
  $(".msg_container").append(templateTemp);
  console.log(templateTemp);
}
});
