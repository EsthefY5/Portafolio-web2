/* Mi primer archivo de JS */

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter
    .typeString('Esthefany De La Cruz')
    .pauseFor(1500)
    .deleteAll()
    .typeString('Programadora Fronterd JR')
    .pauseFor(1500)
    .deleteAll()
    .typeString('<strong>Estudiante</strong>')
    .pauseFor(1500)
    .deleteAll()
    .typeString('amante de los productos de belleza')
    .pauseFor(1500)
    
    .start();