$(document).ready(function () {
    var url = 'https://raw.githubusercontent.com/tamybl/swapi-app/master/assets/js/characters.js';
    $.ajax ({
      type: 'GET',
      url: url,
      success: success,
      error: error
    });
})

function success(characters) {
  console.log('success:', characters);
  console.log(characters[0]);
}


function error() {
  console.log('Ha ocurrido un error');
}