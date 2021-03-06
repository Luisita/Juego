

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

function setNum(num){
   num_3 = num;
}

function getNum(){
   return num_3;
}

window.onload = function(){
   //Recibimos el elemento canvas
   var num_3 = 0;
   var ctx = cargaContextoCanvas('micanvas');
   ctx.fillStyle="#333";
   ctx.font="bold 20px sans-serif";
   ctx.textBaseline="top";
   ctx.fillText('Puntaje: 0',5, 10);
   if(ctx){
      //Creo una imagen conun objeto Image de Javascript
      var imagenes=['fresa','manzana','naranja','pera','uva']
      var imagen = imagenes[aleatorio(0,imagenes.length-1)]      
      var img = new Image();
      //indico la URL de la imagen
      img.src = 'img/'+imagen+".png";
      //defino el evento onload del objeto imagen
      img.onload = function(){
         //incluyo la imagen en el canvas
         num_3 = Math.floor((Math.random() * 4) + 1);
         x = 0;
         for(i=0; i<num_3; i++){
            if(i!=0){
               x = x+80;
            }else{
               x = x + 5;
            }
            ctx.drawImage(img, x, 100);
         }
      }
   }

   var num2 = Math.floor((Math.random() * 4) + 1);
   var num3 = Math.floor((Math.random() * 4) + 1);
   for(i=0;i<num2;i++){
      var num = Math.floor((Math.random() * 10) + 1);
      var boton = document.createElement("button");
      boton.type = "button";
      var t;
      if(num3==num2){
         t = document.createTextNode(num_3);
      }else{
         t = document.createTextNode(num);
      }
      boton.appendChild(t);
     // var element = document.getElementById("b"+i);
      //element.appendChild(boton);
      $("#botonnum").append(boton);
   }

   $("#b"+i).click(function(){
      numero = document.getElementsByTagName("button");

      alert(numero[1]);
   });
}