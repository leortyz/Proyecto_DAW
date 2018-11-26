//https://twitrss.me/twitter_user_to_rss/?user=ieee_espol
function addNew(autor,fecha, descripcion) {

  var date = $("<time/>", {
    "class": "col-6 col-sm-6",
    "datetime":fecha,
    "style": "font-style: italic;",
    html: fecha
  })

  var autor= $("<p/>", {    
    "class": "col-6 col-sm-6",
    html: autor+" dijo:"
  }) 

  var p = $("<p/>", {    
    "class": "text-justify card-body col-md-12 col-sm-12 col-12 row",
    html: descripcion
  })  
  var div = $("<div/>", {
    "class": "card-body col-md-12 col-sm-12 col-12 row"
  });
  var li = $("<li/>", {
  });
  autor.appendTo(div);
  date.appendTo(div);
  div.appendTo(li);
  p.appendTo(li);
  li.appendTo("#lineTime");
}

function loadNewsXml() {
  $.ajax({
    type: "GET",
    url: "https://twitrss.me/twitter_user_to_rss/?user=ieee_espol",
    dataType: "xml",
    success: function (xml) {
    	var counter=0
      $(xml).find('item').each(function () {
      	if(counter<5){
        var autor = $(this).find('dc\\:creator').text();
        var newAutor= autor.slice(2,-1);
        var descripcion = $(this).find('description').text();
        var n= descripcion.search("<img src")
        var regex =/(<img src=\"http(s)?:)(\w|\W)+(\/>)/
        var date = $(this).find('pubDate').text();
        var newDate = date.slice(0,date.indexOf(":")-3);
        var newDescripcion;
        if(n!=-1){
          var inicio = descripcion.search(regex);
          var final = descripcion.indexOf(">",descripcion.search(regex));
          var final2 = 1+descripcion.indexOf("\"",descripcion.search(regex)+10);
          foto = descripcion.slice(inicio+10,final2-1);
          newDescripcion=descripcion.slice(0,inicio)+descripcion.slice(final+1,-1);
          addNew(newAutor,newDate, newDescripcion);
        }else{
          addNew(newAutor,newDate, descripcion) ;
        }
      }
      counter=counter+1
  	});
    },
    error: function () {
      alert("Error al procesar el xml");
    }
  });
}


$(document).ready(function(){
  loadNewsXml();
  alert("hola");
});

