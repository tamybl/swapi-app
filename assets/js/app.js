$(document).ready(function () {
    var url = 'https://raw.githubusercontent.com/tamybl/swapi-app/master/assets/js/characters.json';
    $.ajax ({
      type: 'GET',
      url: url,
      success: success,
      error: error
    });
})

function success(characters) {

  //console.log("Type : "+typeof(characters));
  characters = JSON.parse(characters);
  console.log('success:', characters);
  for (var i = 0; i < characters.characters.length; i++) {
    $('div').append('<p>'+characters.characters[i].name+'</p><p><img src='+characters.characters[i].img+'></p>');
    console.log(characters.characters[i].name);
  }
  console.log(characters.characters.length);
  /*$.each( function (i, characters) {
    console.log(characters.characters[i].name);
  })*/
  
}


function error() {
  console.log('Ha ocurrido un error');
}