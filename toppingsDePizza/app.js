
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

//Metodo querySelectorAll()  => Muestra todos los elementos que cumplan lo que pedimos y devuelve una LISTA DE NODOS
// const toppingNaranja = document.querySelectorAll('.topping.fondo-naranja');

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
*/