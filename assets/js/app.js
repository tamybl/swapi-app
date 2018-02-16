$(document).ready(function () {
    let url = 'https://raw.githubusercontent.com/tamybl/swapi-app/master/assets/js/characters.json';
    $.ajax ({
      type: 'GET',
      url: url,
      success: getCharacters,
      error: error
    });
})

function getCharacters(data) {
  data = JSON.parse(data);
  for (var i = 0; i < data.characters.length; i++) {
    $('#results').append('<div class="col-xs-4 character"><div class="photo"><img src='+data.characters[i].img+' alt=""></div><div class="name">'+data.characters[i].name+'</div><div class="view"><a href="'+data.characters[i].id+'" class="btn btn-default text-uppercase myModal" data-toggle="modal" data-target="#myModal">Info</a></div></div>');
  }

  $('.myModal').click(function () {
    $(".modal-content").html('<div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button><h4 class="modal-title text-center">Loading...</h4></div><div class="modal-body"><p><img src="assets/img/loading.gif" alt="" class="img-responsive loading"></p><div class="modal-footer"><button type="button" class="btn btn-default btn-primary" data-dismiss="modal">Cerrar</button></div></div>');
    var id = $(this).attr('href');
    let url = 'https://swapi.co/api/people/'+id;
    $.get(url, function (data, status) {
      console.log(data);
      $(".modal-content").html('<div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button><h4 class="modal-title text-center">'+data.name+'</h4></div><div class="modal-body"><p>Año de Nacimiento: '+data.birth_year+'</p><p>Color de Ojos: '+data.eye_color+'</p><p>Alto: '+data.height+'</p><p>Peso :'+data.mass+'</p><p>Color de Pelo: '+data.hair_color+'</p><div class="modal-footer"><button type="button" class="btn btn-default btn-primary" data-dismiss="modal">Cerrar</button></div></div>');
    });
  })
}


function error() {
  console.log('Ha ocurrido un error');
}