$(document).ready(function () {
  $.ajax({
    url: url,
    success: success,
    error: error
  })
})