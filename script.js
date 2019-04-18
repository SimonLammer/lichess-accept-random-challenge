$("#challenge_app").prepend('<div id="accept-random-challenge" style="padding:5px; border-radius:2px; background-color:#759900; color:#fff;">Accept random challenge</div>');
$("#accept-random-challenge").click(function() {
  $('.challenge').eq(Math.floor(Math.random() * $('.challenge').length)).find('.accept').click();
});