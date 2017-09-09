$(function() {
  $.ajax({
    url: "/user",
    method: 'POST'
  }).done(function(res) {
    console.log(res);
  });
});
