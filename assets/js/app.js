$(document).ready(function () {
    let url = 'https://raw.githubusercontent.com/tamybl/swapi-app/master/assets/js/characters.json';
    $.ajax ({
      type: 'GET',
      url: url,
      success: getCharacters,
      error: error
    });
})

function getCharacters(characters) {
  characters = JSON.parse(characters);
  //console.log('success:', characters);
  for (var i = 0; i < characters.characters.length; i++) {
    $('#contenedor').append('<div class="col-xs-4 character"><div class="photo"><img src='+characters.characters[i].img+' alt=""></div><div class="name">'+characters.characters[i].name+'</div><div class="view"><a href="'+characters.characters[i].id+'" class="btn text-uppercase myModal" data-toggle="modal" data-target="#myModal">Info</a></div></div>');
  }

  $('.myModal').click(function () {
    var id = $(this).attr('href');
    let url = 'https://swapi.co/api/people/'+id;
    console.log(url);
    $.ajax({
      url: url,
      success: getDetails,
      error: error
    });
  })
}

function getDetails(details) {
  console.log(details)

}

function error() {
  console.log('Ha ocurrido un error');
}