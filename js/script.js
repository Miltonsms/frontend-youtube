$(document).ready(function(){
  $('.boton').click(function(){
    var pais = $('input:text[name=nombre]').val();
    var service_url = 'https://www.googleapis.com/freebase/v1/search';
    var params = {
    'query': pais,
    'limit': 10,
    'indent': true
  };
  $.getJSON(service_url + '?callback=?', params, function(response) {
    $(".mostrar").empty();
    var conteo = 0
    $.each(response.result,function(i, result){
      conteo +=1
    var obj={text:result['name']}.text;
    var insertar='<tr>'+'<td>'+conteo+'</td>'+'<td>'+obj+'</td>'+'</tr>'
    $('.mostrar').append(insertar);
});
  });
});
});
