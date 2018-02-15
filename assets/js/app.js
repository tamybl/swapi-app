$(document).ready(function () {

  $("button").click(function(){
    $.getJSON("assets/js/characters.js", function(result){
        $.each(result, function(i, field){
            $("div").append(field + " ");
        });
    });
});
})