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
// funzione di ricerca contatti
  $("#search-text").keyup(function() {

    var ricerca = $(this).val();
    console.log(ricerca);

    $(".contact_left").each(function() {
      $(this).show();

      var contact = $(this).find("b").text();
      console.log(contact);
      if (!contact.includes(ricerca)) {
        $(this).hide();
      }
    })

  })
  $(".contact_left").click(function() {
    var contactsel = $(this).find("b").text();
    $(".section_up .namechat").text(contactsel);
    var imgcontact = $(this).find("img").attr("src");
    $(".section_up img").not("").attr("src" , imgcontact);
    var chat = $(this).attr("chatnumber");
    console.log(chat);

    $(".msg_container").removeClass("active");
    $('.msg_container[chat = "'+ chat +'"]').addClass("active");
  })

    // $(".msg_container").on("click" , ".verdi" , function() {
    //   $(this).children
    //
    // })


});
