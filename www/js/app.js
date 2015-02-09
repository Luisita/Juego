function cargaContextoCanvas(idCanvas){
   var elemento = document.getElementById(idCanvas);
   if(elemento && elemento.getContext){
      var contexto = elemento.getContext('2d');
      if(contexto){
         return contexto;
      }
   }
   return FALSE;
}

function aleatorio(inferior,superior){
   numPosibilidades = superior - inferior + 1
   aleat = Math.random() * numPosibilidades
   aleat = Math.floor(aleat)
   return parseInt(inferior) + aleat
}


window.onload = function(){
   //Recibimos el elemento canvas
   var ctx = cargaContextoCanvas('micanvas');
   if(ctx){
      //Creo una imagen conun objeto Image de Javascript
      var imagenes=['fresa.jpg','manzana.jpg','naranja.jpg','pera.jpg','uva.jpg']
      var imagen = imagenes[aleatorio(0,imagenes.length-1)]      
      var img = new Image();
      //indico la URL de la imagen
      img.src = 'img/'+imagen;
      //defino el evento onload del objeto imagen
      img.onload = function(){
         //incluyo la imagen en el canvas
         ctx.drawImage(img, 10, 10);
      }
   }
}