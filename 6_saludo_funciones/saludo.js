
function iniciosesion (usuario="sin autenticar"){
    console.log('estamos verificando su identidad ');
    console.log(`bienvenido ${usuario}`);

}
iniciosesion();

function bienvenido (){
    console.log('ya estas autenticado');
    iniciosesion('nicole');
}
bienvenido();
