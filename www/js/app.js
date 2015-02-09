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


window.onload = function(){
   //Recibimos el elemento canvas
   var ctx = cargaContextoCanvas('micanvas');
   if(ctx){
      //Creo una imagen conun objeto Image de Javascript
      var imgList = new Array();
      imgList.push(new Image());
      imgList[0].src="img/fresa.jpg";
      //defino el evento onload del objeto imagen
      img.onload = function(){
         //incluyo la imagen en el canvas
         ctx.drawImage(imgList[0], 10, 10);
      }
   }
}