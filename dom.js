
  function add(){  /*Se toma el valor y se suma para que muestre el comentario*/
    var comments = document.getElementById('comment').value;

     document.getElementById('comment').value ="";
     var newComments= document.createElement('div');
     var cont= document.getElementById('cont');

     var check= document.createElement('input');
     check.type= 'checkbox';


     var paragraph= document.createElement('p'); 
     paragraph.classList.add("color");


     /*Debe ponerse esta variable para que me permita incluir el texto antes de los iconos y despues del checkbox
     paragraph.classList.add('color');*/
     var nodoText= document.createTextNode(comments);
     paragraph.appendChild(nodoText);
     

     var heart= document.createElement('i');   /*variable para agregar icono heart(i) dentro del cuadro de comentarios*/
     heart.classList.add('fa','fa-heart', 'heart');

     var trash= document.createElement('i'); 
     trash.classList.add('fa', 'fa-trash','trash');

     newComments.appendChild(check);  /*No llevan comillas check, trash, etc... pues es parte de la varable que contiene a los elementos*/
     newComments.appendChild(trash);
     newComments.appendChild(heart);
     newComments.appendChild(paragraph);
     cont.appendChild(newComments);

     check.addEventListener('click', function(){
        paragraph.classList.toggle('strike-out')
     })

     trash.addEventListener('click', function(){
        cont.removeChild(newComments);
     })

     heart.addEventListener('click',function(){
        heart.classList.toggle('red');
     })
}
