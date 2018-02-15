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
    $('#contenedor').append('<div class="col-xs-4 character"><div class="photo"><img src='+characters.characters[i].img+' alt=""></div><div class="name">Luke Skywalker</div><div class="view"><button class="btn text-uppercase">Info</button></div></div>');
  }

  
}


function error() {
  console.log('Ha ocurrido un error');
}