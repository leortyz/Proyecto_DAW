function addNew(titulo,descripcion,imagen,valor){
   var title = $("<h4/>", {
      "class":"group card-title inner list-group-item-heading",
      html: titulo
    })

    var p = $("<p/>",{
      "class": "group inner list-group-item-text",
      html: contenido
    })
    var img=$("<img/>",{
    	"class"="group list-group-image img-fluid",
    	"src"=imagen,
    	"alt"=""

    })
    var = divG=$("<div/>",{
    	"class"="item col-xs-4 col-lg-4"
    })
    var divtc=$("<div/>",{
    	"class"="thumbnail card"
    })

    var divImg =$("<div/>",{
    	"class"="img-event"
    })
    var divAc=$("<div/>",{
    	"class"="caption card-body"
    })
    var div1 = $( "<div/>", {
      "class": "row"
    });

    var div2 = $( "<div/>", {
      "class": "col-xs-12 col-md-6"
    });

    var div22 = $( "<div/>", {
      "class": "col-xs-12 col-md-6"
    });

    var precio=$("<p/>",{
    	"class"="lead",
    	html: valor
    })
    var btn=$("<a/>",{
    	"class"="btn btn-success",
    	"href"="http://www.jquery2dotnet.com",
    	html: "Inscribirse"
    })

    
    img.appendTo(divImg);
    title.appendTo(divAc);
    p.appendTo(divAc);
    precio.appendTo(div2);
    btn.appendTo(div22);
    div2.appendTo(div);
    div22.appendTo(div);
    div.appendTo(divAc);
    divImg.appendTo(divtc);
    divAc.appendTo(divtc);
    divtc.appendTo(divG)
    divG.appendTo("#products");
}


function loadNewsJson() {
   $.getJSON( "eventos.json", function( data ) {
    
      $.each( data, function( key, val ) {
        addNew(val.titulo, val.descripcion, val.imagen,val.valor)
      });
    
  });
}