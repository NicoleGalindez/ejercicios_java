//___________01______________________________

/*
let recorrido;
recorrido= document;
recorrido= document.forms;

recorrido=document.forms[0];
recorrido=document.forms[0].action;
recorrido=document.links;
recorrido=document.links[4];
 recorrido=document.images;
recorrido=document.forms[0].method;
document.write
recorrido=document.links[24];

console.log(recorrido);

*/
//___________02______por clases______________________________



//  const encabezado =document.getElementsByClassName('contenedor');
//  console.log(encabezado);

// const hero=document.getElementsByClassName('contenido-hero');
// console.log(hero);

// const contenedores=document.getElementsByClassName('contenedor');
// console.log(contenedores);



//___________03_______ por id______________________________
/*
 const formulario= document.getElementById('formulario');
 console.log(formulario);

const noexiste=document.getElementsById('no-existe');
console.log(noexiste);

*/
//___________04______Query selector______________________________

// const card=document.querySelector('.card');
// console.log(card);


// const info=document.querySelector('.premium .info');
// console.log(info);


// const segundoCard=document.querySelector('.hospedaje .card:nth-child(3)');
// console.log(segundoCard);

// const formulario=document.querySelector('#formulario');
// console.log(formulario);


// const formulario1=document.querySelector('.contenido-hero #formulario');
// console.log(formulario1);



// ___________05________Query selector ALL______________________________



// const cards= document.querySelectorAll('.card');
// console.log(cards);

// const formulario= document.querySelectorAll('#formulario');
// console.log(formulario);

// const noexiste=document.querySelectorAll('#no-existe');
// console.log(noexiste);

//___________06________buscar y cambiar______________________________

/*
const encabezado=document.querySelector('.contenido-hero h1');
console.log(encabezado.innerText);
console.log(encabezado.textContent);
console.log(encabezado.innerHTML);  // mas utulizado 

*/
// const textoencabezado=document.querySelector('.contenido-hero h1').textContent;
// console.log(textoencabezado);

// para cambiar texto :
// document.querySelector('.contenido-hero h1').textContent='Aprendices adso ...' ;

//en variable:
//const nuevotexto='aqui va el nuevo texto a mostrarse'; document.querySelector('.contenido-hero h1').textContent=nuevotexto;



// ejercicio con "que hacer"

//  const nuevotexto='si salió';
//  document.querySelector('.hacer h2').textContent=nuevotexto;

// document.querySelector('.hacer h2').textContent='que ??????????' ;

//------------------------
// EJERCICIO
/*
let pide;

do{
    pide=parseInt(prompt('dijite 1 si eres tutor,  2 si eres un adolecente o 3 si eres cualquier persona'));

}while(pide!==1 && pide!==2 && pide!==3);

    if(pide===1){
        document.querySelector('.contenido-hero h1').textContent='Bienvenido tutor' ;
    }
    else if(pide===2){
        document.querySelector('.contenido-hero h1').textContent='bienvenido adolecente ' ;
    }
    else if(pide===3){
        document.querySelector('.contenido-hero h1').textContent='bienvenido a ConfiApp ' ;
    }
    */


//________cambiar imagenes_______

// const imagen=document.querySelector('.card img');
// console.log(imagen.src);

// imagen.src='img/populares1.jpg';


////___________07________ cambiar______________________________


// const heading=documen.querySelector('h1');

// titulo.style.backgroundColor='red';

// titulo.style.textTranform = 'uppercase';
// titulo.style.textTransform = 'lowercase'; //pasa todo a minus
// heading.style.fontFamily='tahoma';



// const card=document.querySelector('.card');
// console.log(card);
// console.log(card.classlist);
// card.classlist.add('nueva-clase');

// const navegacion=document.querySelector('.navegacion');
// console.log(navegacion);
// console.log(navegacion.childNodes);
// console.log(navegacion.children);
// console.log(navegacion.children[0].nodeType);  // que tipo de nodo
// console.log(navegacion.children[0].nodeName); //que etiqueta es


//////___________08________ -----______________________________


// const card=document.querySelector('.card');
// console.log(card.children[1]);

// console.log(card.children[1].children[1].textContent);

// card.children[1].children[1].textContent='cambiando el texto con traversing...¿?';

// console.log(card.children);
// console.log(card.children[0]);
// console.log(card.children[0].src);
// card.children[0].src='img/hacer3.jpg';

//-------------------------------------------------------------------------------------------------

// const navegacion=document.querySelector('.navegacion');
// console.log(navegacion.lastchild);
// console.log(navegacion.lastElementChild);


//
//EJERCICIO 2_______________________


//  bienvenido y menu dependiendo 1,2,3:
 

let ingresa;

 do{
    ingresa=parseInt(prompt('QUIEN ERES? : dijite 1 si eres tutor,  2 si eres un adolecente o 3 si eres cualquier persona'));

    }while(ingresa!==1 && ingresa!==2 && ingresa!==3);
    
        if(ingresa===1){
            document.querySelector('.contenido-hero h1').textContent='Bienvenido tutor' ;

            //-----menu:
            navegacion.children[0].textContent='menores';
            navegacion.children[1].textContent='rutas';
            navegacion.children[2].textContent='seguimiento';
            navegacion.children[3].remove('inicia sesion');
            
        }
        else if(ingresa===2){
            document.querySelector('.contenido-hero h1').textContent='bienvenido adolecente ' ;

            //-----menu:
            navegacion.children[0].textContent='ruta'
            navegacion.children[1].textContent='alertas'
            navegacion.children[2].textContent='s.o.s'
            navegacion.children[3].remove('inicia sesion');
        }
        else if(ingresa===3){
            document.querySelector('.contenido-hero h1').textContent='bienvenido a ConfiApp ' ;
            
        }
        

        
//
//EJERCICIO 3_______________________

/*
//  bienvenido, menu y contenido dependiendo 1,2,3:
 

let ingresa;

do{
   ingresa=parseInt(prompt('QUIEN ERES? : dijite 1 si eres tutor,  2 si eres un adolecente o 3 si eres cualquier persona'));

   }while(ingresa!==1 && ingresa!==2 && ingresa!==3);
   
       if(ingresa===1){
           document.querySelector('.contenido-hero h1').textContent='Bienvenido tutor' ;

           //-----menu:---------------
           navegacion.children[0].textContent='menores';
           navegacion.children[1].textContent='rutas';
           navegacion.children[2].textContent='seguimiento';
           navegacion.children[3].remove('inicia sesion');

           //-----contenido:-----------

           //imagenes:
           //
            const imagen=document.querySelector('.card img2');
            console.log(imagen.src);
            imagen.src='img/hacer4.jpg';
        

            //
            const imagen1=document.querySelector('.card img');
            console.log(imagen.src);
            imagen.src='img/hacer4.jpg';
            //textos:

            //document.querySelector('.card categoria concierto ').textContent=' ciclo ruta nocturna? ' ;  // no seeeee

            document.querySelector('.hacer h2').textContent='¿Que deseas hacer hoy?' ;

            document.querySelector('.mi-viaje-plus').textContent='no se que  ba bla bla ';

            document.querySelector('.hacer  h3').textContent='je je je, je je je jejeje ';

            document.querySelector('.hospedaje h2 ').textContent='HOGAREEES BONIS BONIS ';
            
            document.querySelector('.destinos h2 ').textContent='lugares de ensueño ';

            document.querySelector('hacer h2 ').textContent='tampoco se que poner';


            // document.querySelector('.contenedor-cards categoria hospedaje').textContent='casa familiar, 3 habitaciones '; // no funciona?

            // document.querySelector('.contenedor-cards premium h3').textContent=' ooooh oooo ooooh ooooooh ooooh oooh  ' ;
            

           
       }
       else if(ingresa===2){
           document.querySelector('.contenido-hero h1').textContent='bienvenido adolecente ' ;

           //-----menu:------------------
           navegacion.children[0].textContent='ruta'
           navegacion.children[1].textContent='alertas'
           navegacion.children[2].textContent='s.o.s'
           navegacion.children[3].remove('inicia sesion');

           //-----contenido:-------------
           


           //textos:
           //document.querySelector('.card categoria concierto ').textContent=' ciclo ruta nocturna? ' ;  // no seeeee

           document.querySelector('.hacer h2').textContent='¿Queeeeeeeeeeeeeeeee?' ;

           document.querySelector('.mi-viaje-plus').textContent='123123123123123 ';

           document.querySelector('.hacer  h3').textContent='laaaaaaaaaa';

           document.querySelector('.hospedaje h2 ').textContent='casascasascasascasascasas ';
           
           document.querySelector('.destinos h2 ').textContent='lugares lugares lugares  ';

           document.querySelector('hacer h2 ').textContent='juuuummmm';


           // document.querySelector('.contenedor-cards categoria hospedaje').textContent='casa familiar, 3 habitaciones '; // no funciona?

           // document.querySelector('.contenedor-cards premium h3').textContent=' ooooh oooo ooooh ooooooh ooooh oooh  ' ;
           

       }
       else if(ingresa===3){
           document.querySelector('.contenido-hero h1').textContent='bienvenido a ConfiApp ' ;

           //-----contenido:
           
       }
       

       */
//___________


//________cambiar imagenes_______
// const imagen=document.querySelector('.card img');
// console.log(imagen.src);
// imagen.src='img/populares1.jpg';
//_______ para cambiar texto______________
// document.querySelector('.contenido-hero h1').textContent='Aprendices adso ...' ;


//________cambiar imagenes_______
//     // ___________________________
            
//     console.log(card.children);
//     console.log(card.children[3]);
//     console.log(card.children[3].src);
//     card.children[3].src='img/hacer1.jpg';
// //_________________________

// console.log(navegacion.firstChild);
// console.log(navegacion.firstElemtnChild);
//__------------------------------------------
/*
const enlace= document.querySelector('a');
console.log(enlace);

console.log(enlace.parentNode);
console.log(enlace.parentElement);


console.log(elace.parentElement.parentElement)
*/
//------ al siguiente ----
/*
console.log(enlace);
console.log(enlace.nextElementSibling);
console.log(enlace.nextElementSibling.nextElementSibling);

console.log(enlace.nextElementSibling);

*/
//------ al anterior-----


//_____________________09______elminar elementos__________
/*
const primerenlace=document.querySelector('a');
console.log(primerenlace);

primerenlace.remove();
*/
//----

/*
const navegacion1=document.querySelector('.navegacion');

navegacion1.removeChild(navegacion1.children[2]);

const borrar= navegacion.children[0]
navegacion.removeChild(borrar);
*/


//________________________10__________crear  elementos__________

/*
const enlace=document.createElement('a');

enlace.textContent='nuevo enlace';

enlace.href='htpp://www.sena.edu.co';
enlace.target='_blank';
console.log(enlace);


const navegacion=documetn.querySelector('.navegacion');
navegacion.appendChild(enlace);

navegacion.insertBefore(enlace, navegacion.children[3]);

*/

//_____________notificaciones

/*
enlace.onclick=alertas;
function alertas(){
    alert('hola estas a punto de ....');
}

console.log(enlace);
*/

//____________________________
/*
const parrafo1= document.createElement('p');
parrafo1.textContent='aprendiz';
parrafo1.classList.add('categoia');
parrafo1.classList.add('concierto');


const parrafo2= document.createElement('p');
parrafo2.textContent='nombre';
parrafo2.classList.add('titulo');


const parrafo3= document.createElement('p');
parrafo3.textContent='jornada';
parrafo3.classList.add('precio');


const info=document.createElement('div');
info.classList.add8('info');
info.append.child(parrafo1)
info.append.child(parrafo2)
info.append.child(parrafo3);


const imagen=document.createElement('img');
imagen.src='img/hacer4.jpg';

imagen.alt='texto alternativo';
 const card=document.createElement('div');
 card.classList.add('card');

 card.appendChild(imagen);
 card.appendChild(info);


 const contenedor=document.querySelector('.hacer .contenedor-cards');
 contenedor.appendChild(card);
 console.log(parrafo1);
 console.log(parrafo2);
*/

//__________________11_________

const btnFlotante=document.querySelector('.btn-flotante');
const footer=document.querySelector('.footer');

btnFlotante.addEventListener('click',()=>{
    alert('diste click');
})

// mostrar ocultar


btnFlotante.addEventListener('click', mostrar);
function mostrar(){
    if(footer.classList.contains('activo')){
        footer.classList.remove('activo');
        this.classList.remmove('activo');
        this.textContent='idioma y moneda';
    } else {
        footer.classList.add('activo');
        this.classList.add('activo');
        this.textContent='x cerrar';
    }

}