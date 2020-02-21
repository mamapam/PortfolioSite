$(document).ready(function() {
  writeText();

  $('.nextsection').on('click', function(event) {
    if(this.hash != "") {
      event.preventDefault;
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset.top
      }, 5000, function() {
        window.location.hash = hash;
      });
    }
  });

});

let count = 0;

function writeText() {

  let text = './helloworld.sh';

  if(count < text.length) {
    document.querySelector('#helloworld').innerHTML += text.charAt(count);
    count++;
    setTimeout(function() {
      writeText();
    }, 90);
  } else {
    document.querySelector('#output').innerHTML = ">$ Hi, I'm Moeen! Welcome to my site!";
  }
}

