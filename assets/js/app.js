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
    var id = $(this).attr('href');
    let url = 'https://swapi.co/api/people/'+id;
    $.get(url, function (data, status) {
      console.log(data);
      $(".modal-content").html('<div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button><h4 class="modal-title">'+data.name+'</h4></div><div class="modal-body"><p>'+data.height+'</p><p>'+data.mass+'</p><p>'+data.hair_color+'</p></div>');
    });
  })
}


function error() {
  console.log('Ha ocurrido un error');
}