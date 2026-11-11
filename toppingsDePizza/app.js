
//Metodo getElementById => Selecciona por el ID
// const titulo = document.getElementById('titulo');

//Metodo getElementsByClassName => Selecciona por el nombre de la clase
// const toppings = document.getElementsByClassName('topping');

//Metodo getElementsByTagName => Selecciona por el nombre de la etiqueta
// const misTopings = document.getElementsByTagName('li');

//Metodo querySelector()  => Muestra primer elemento que cumpla lo que pedimos
// const aceitunas = document.querySelector('#aceitunas'); //Se coloca # porque lo que buscamos aqui es un ID
// const aceitunas = document.querySelector('.topping'); //Se coloca . porque lo que buscamos aqui es una clase
// const primeroToppinNaranja = document.querySelector('.topping.fondo-naranja'); //Aqui buscamos un elemento con varias caracteristicas
// const primerToppingNoMarron = document.querySelector('ul li:not(.fondo-marron)');//Muestra primer topping que no tiene fondo marron

//Metodo querySelectorAll()  => Muestra todos los elementos que cumplan lo que pedimos y devuelve una LISTA DE NODOS (Pero debemos recorrerlos con un array porque son varios)
// const toppingNaranja = document.querySelectorAll('.topping.fondo-naranja');
// const cambioMarron = document.querySelectorAll('.fondo-naranja'); //Primero seleccionamos
//Aqui recorremos todos los seleccionados se aplique el cambio
// cambioMarron.forEach(cambio => {
//     cambio.style.color = 'red';
//     cambio.style.backgroundColor = 'green';
// });

//Para dar ESTILOS desde JS usando la seleccion con los metodos anteriores
// const toppingPrimeroCambioEstilo = document.querySelector('.topping');
// toppingPrimeroCambioEstilo.style.backgroundColor = 'blue'; //Color de fondo cambiado
// toppingPrimeroCambioEstilo.style.color = '#6dff00'; //Color de texto cambiado
// toppingPrimeroCambioEstilo.style.textTransform = 'uppercase'; //Transformar texto cambiado

//Para obrener el contenido interno de un texto
// const listaDeToppings = document.getElementById('lista-toppings');
// console.log(listaDeToppings.innerText);//Acceder al texto interno
// console.log(listaDeToppings.textContent); //Acceder al texto interno mostrando la indentacion original
// console.log(listaDeToppings.innerHTML); //Muestra toda la estructura del elemento

//Para modificar el contenido interno de un texto
// const titulo = document.getElementById('titulo'); //Accedemos
// titulo.innerText = 'Mis toppings favoritos'; //Modificamos

//Para mpdificar Atributos, en este ejemplo un enlace HREF
// const enlaces = document.getElementsByTagName('a');
// console.log(enlaces[0].getAttribute('href')); //Para acceder al atributo
// console.log(enlaces[0].removeAttribute('href'));//Para eliminar el atributo
// console.log(enlaces[0].setAttribute('href', 'www.google.com'));//Para modificar el atributo..primer elemento es el atributo seleccionado y segundo el valor que le vamos a colocar

//Para agregar o modificar clases
// const primerTopping = document.querySelector('.topping');
// primerTopping.classList.add('texto-verde'); //AGREGA una clase
// console.log(primerTopping.classList.contains('fondo-marron'));//Verifica //Devuelve TRUE or FALSE
// primerTopping.classList.remove('topping');//Elimina una clase
// console.log(primerTopping.classList); //Muestra la lista de clases que hay en el dom y sus valores


//Para Crear un elemendo desde cero al DOM
// const listaDeToppings = document.getElementById('lista-toppings');//Ubicar donde colocar el elem nuevo
// const toppingNuevo = document.createElement('li');//Creamos el elemento sin agregarlo
// toppingNuevo.classList.add('topping', 'fondo-marron');//PAra dar estilo al elemento nuevo agregado
// toppingNuevo.innerText = 'Queso Extra';
// listaDeToppings.append(toppingNuevo);//Agregar topping nuevo a la lista de topping
// listaDeToppings.appendChild(toppingNuevo);

//Para ELIMINAR un elemendo desde cero al DOM
// toppingNuevo.remove();

//Para recorrer el DOM
// const listaDeToppings = document.getElementById('lista-toppings');
// console.log(listaDeToppings.parentElement);//muestra el elemento HTML padre
// console.log(listaDeToppings.parentNode); //Muestra todas las caracteristicas
// console.log(listaDeToppings.children); //Muestra los hijos del elemento
//                    HIJOS
// console.log(listaDeToppings.firstChild); //Selecciona el primer hijo #text....
// console.log(listaDeToppings.firstElementChild) //Selecciona el primer hijo version HTML (Recomendado PRIMERO)
// console.log(listaDeToppings.lastChild); //Selecciona el ultimo hijo #text....
// console.log(listaDeToppings.lastElementChild); //Selecciona el ULTIMO elemento hijo version HTML (Recomendad ULTIMO)
// console.log(listaDeToppings.children[0]); //Selecciona el hijo segun el indice
//                    HERMANOS
// console.log(listaDeToppings.previousElementSibling); //Muestra elemento HERMANO anterior (RECOMENDADO)
// console.log(listaDeToppings.previousSibling) //Muestra nodo HERNANO anterior
// console.log(listaDeToppings.nextElementSibling); //Muestra elemento HERMANO posterior (RECOMENDADO)
// console.log(listaDeToppings.nextSibling); //Muestra nodo HERMANO posterior

// Eventos Del DOM







/*
NOTAS:
-innerHTML muestra la estructura completa que contiene el elemento

-innerText muestra el texto contenido dentro del elemento

-textContent muestra el contenido interno del texto pero tambien muestra los espacion indentados

-tagName muestra el nombre de la etiqieta

(Con el Id solo puedes seleccionar 1 elemento ya que es unico)

(Con clases puedes seleccionar varios elementos)
-al seleccionar clases el nombre de la constante debe ser en plural para diferenciarlos

-Para acceder al ID de un elemento en especifico lo hacemos asi console.log(toppings[0].id)

-Para seleccionar por el nombre de la etiqueta sin usar clases ni ID usamos getElementByTagName

- Para seleccionar un elemento que cumpla el criterio de un selector css usamos:
    .querySelector()  => Selecciona el primer elemento que cumpla la condicion
    .querySelectorAll  => Selecciona todos lo elementos que cumplan la condicion
        _Se usan cuando son selecciones mas especificas_

-Para dar estilos desde JS usamos notacion de puntos => 
    toppingPrimeroCambioEstilo.style.backgroundColor = 'blue'; 

    CLASESnotas
-Para agregar una clase usamos .add('valor...')
-Para verificar si existe una clase usamos el metodo .contains('valor...') -DEVUELVE TRUE O FALSE-
-Para eliminar una clase usamos .remove('valor...')

-Para crear un elemento nuevo usamos el metodo createElement('etiqueta...')

-Para agregar un nodo dentro de otro elemento usamos .append('elementoNuevo...')
-Para agregar elementos HTML usamos appendChild('elementoHTMLnuevo...')

-Para eliminar un elemento usamos el metodo remove()

nodo =>  incluye todo
parentElement => solo incluye ek elemento HTML
*/




//---------------------------REPASOS------------------------------------------------------

const cambioFondoNar = document.querySelectorAll('.fondo-naranja');
cambioFondoNar.forEach(cambioNar => {
    cambioNar.style.color = '#FFDDAA';
    cambioNar.style.textTransform = 'lowerCase';
    cambioNar.style.backgroundColor = 'blue';
});

const cambioFondoMarr = document.querySelectorAll('.fondo-marron');
cambioFondoMarr.forEach(cambioMarr => {
    cambioMarr.style.color = '#ffddaa';
    cambioMarr.style.textTransform = 'uppercase';
    cambioMarr.style.backgroundColor = 'green';
});
