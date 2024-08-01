console.log("HOLA MUNDO! desde la consola"); //comentarios
var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true //loop significa que la accion se esta repitiendo
});

typewriter.typeString('Desarrolladora Fronted Jr.')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Programadora')
    .pauseFor(2500)
    .deleteChars(12)//(7)
    .typeString('<strong>Ciencia de Datos<strong>s')
    .pauseFor(2500)
    .start();