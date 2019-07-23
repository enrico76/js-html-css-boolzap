console.log("initial myscript");

$( document ).ready(function(){
$("#iconSend").click(invioMsg);




// funzione di invio messaggio
function invioMsg () {
  var invioUtente = $("#myText").val();
  console.log(invioUtente);
}
});
