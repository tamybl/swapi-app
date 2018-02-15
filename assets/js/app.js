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
  characters = JSON.parse(characters);
  console.log('success:', characters);
  for (var i = 0; i < characters.characters.length; i++) {
    $('#contenedor').append('<p>'+characters.characters[i].name+'</p><p><img src='+characters.characters[i].img+'></p>');
  }

  
}


function error() {
  console.log('Ha ocurrido un error');
}