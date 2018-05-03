//define functions here

function getIt() {
  $('p').on('click', function() {
    alert('Hey!')
  })
}

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass('tasty')
  })
}

function pressIt() {
  $('#typing').on('keydown', function(key) {
  if(key.which == 71){
      alert('G was pressed');
  }
});
}

function submitIt() {
  $("form").on("submit", function() {
    if ($( "input:first" ).val() {
      alert()
  }

$(document).ready(function(){

// call functions here

});
