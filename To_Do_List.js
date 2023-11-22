//! Clase Item
/* ¡Llegó la hora de darle funcionalidad a tu lista de tareas!
Para empezar, seleccionarás los elementos del "input" principal. Luego, continuarás con el "boton-agregar" y el "container". Para eso, usarás querySelector() y guardarás estas referencias en tres Variables distintas.
Al finalizar, el proyecto debería funcionar así: 

Trabajar Con Clases:
Para empezar, creá la Clase Item. Ésta posee en su constructor el llamado a un método propio: crearDiv.

Pista:  ¿Cómo Debe Ser El div?
Deberás crear un div que contenga un input. Este formará parte de la lista de tareas a realizar.
El constructor de la Clase Item recibirá como parámetro el valor del input de la tarea a agregar; por ejemplo, "Lavar los platos". El método crearDiv recibirá este mismo valor.

Luego, definí el método crearDiv (dentro de la Clase Item) y pasá como parámetro la nueva tarea.

Solucion: El código del constructor debería quedarte así:
constructor(nuevaTarea) {
        this.crearDiv(nuevaTarea)
}

📛 Revisá este proceso. Luego, pasá a la siguiente sección para aprender el método que te permitirá crear tareas.
=================================================================================================================================
*/

/* Método crearDiv (Parte 1)
Este método te permitirá agregar tareas a tu lista. Para eso, seguí estas recomendaciones:
    Dentro del método crearDiv, usá createElement para crear un input de tipo "text".

    ⚠️ Importante: Guardá la referencia a este elemento en la Variable inputItem.

    Establecé la Propiedad disabled de la Variable inputItem con el valor true.
    Usá el método classList.add para agregar la clase css item-input a la Variable inputItem.

    Tomá el parámetro del constructor para asignarle un valor a la variable inputItem.
    Por último, usá createElement para crear un nuevo div. Guardá la referencia a este elemento en una Variable y agregale la clase css item.
 
 ===============================================================================================================
 
 Trabajar Con Botones

Ahora, crearás los botones para editar y remover los input de la lista.
Botón "EDITAR" ("🔒 ")

    Creá el botón para editar el input de la tarea agregada. Guardá la referencia en una Variable llamada botonEditar.
    Usá innerHTML para insertar su ícono dentro del botonEditar.

  Solucion: innerHTML= "<i class='fas fa-lock'></i>"

  Por último, usá classList.add para agregar la Clase boton-editar a tu botón.


Botón "REMOVER" ("🗑 ")️
    Repetí los mismos pasos para crear el botón "Remover". Guardá su referencia en una Variable llamada botonRemover.


    Pista: Usá innerHTML para insertar su ícono dentro del botonRemover.
           innerHTML= "<i class='fas fa-trash'></i>"
 
  🛎️ Recordá: agregá la Clase boton-remover a tu botón.
  
  Agregar Elementos A La Lista

  Ahora, agregarás el div, input y botones a la lista.

    Primero, para agregar el input y los botones al div, deberás usar appendChild.

    Luego, con la misma Función, deberás agregar el div (que ya contiene los otros elementos) a la Variable container.

📛 Si todo funciona bien, pasá a la siguiente sección.

=======================================================================================================================================0


Método crearDiv (Parte 2)

En esta sección definirás el comportamiento de los botones dentro del método crearDiv.
Para eso, definí el comportamiento del botonEditar para que el usuario pueda hacer click y modificar el input de la tarea agregada.

Además, al presionar el botón, el ícono debe cambiar a un candado abierto ("🔓"): "<i class='fas fa-lock-open'></i>". Al volver a presionar, debe cerrarse otra vez y deshabilitar la edición.

Pista:  Cómo Generar Este Comportamiento
Podemos generar este comportamiento negando (!) el valor boolean de input.disabled. De esta manera, cada vez que el usuario haga click en el candado, se usará ese valor para generar un comportamiento o el otro (🔒 = !🔒).

Luego, definí el comportamiento del botonRemoverpara que el usuario pueda hacer click y se remueva el div creado inicialmente.

¡Ya escribiste la Clase Item y el método crearDiv!
Pasá a la siguiente sección para verificar el input.
===========================================================================================================================================


Verificar El Input

Ahora, deberás definir una Función llamada chequearInput para comprobar si el input de la nueva tarea tiene un valor. Si es así, debe instanciar un Objeto de tipo Item y pasarle al constructor ese valor.

⚠️ Importante: la Función chequearInput debe ir por fuera de la Clase Item.

Además, una vez que el usuario agregue una tarea a la lista, el input debe volver a quedar vacío.

Por último, el botonAgregar debe llamar a la Función chequearInput cada vez que el usuario haga click.

📛 Si todo funciona bien, pasá a la siguiente sección para definir los detalles finales a tu proyecto.

===================================================================================================================
Retoques Finales

¡Ya estás cerca de terminar tu proyecto!
En esta sección, agregarás los detalles finales: mejorarás la estética de los botones y de los input.

Al finalizar, tu proyecto debería verse así:


Paso A Paso
Modificar Los input
En tu hoja de estilos, hacé referencia a la Clase .item-input y dale el siguiente formato:


    Una altura y un ancho de 50px.
    Un padding de 0px hacia arriba y abajo y de 20px hacia los costados.
    Un borde sólido y blanco de 1px.
    Un border-radius de 10px.
    Un tamaño tipográfico de 18px.
    Un color de texto blanco.
    Remové el fondo con la Propiedad background: none.
    Eliminá el contorno de los input nuevos.


    Modificar El Espaciado
    Para generar más espacio entre los ítems, agregale un margen inferior de 10px a la Clase .item.


    Modificar El Botón "Editar"

Hacé referencia a la Clase .boton-editar y dale el siguiente formato:

    Un margen de 0px arriba y abajo y de 5px hacia los costados.
    Remové el borde que viene por default con la Propiedad border: none.
    Remové el fondo con la Propiedad background: none.
    Asigná al texto el color #62d0ff, un tamaño 1.4rem y una tipografía Montserrat, sans-serif.

    Modificar El Botón "Remover"
    Hacé referencia a la Clase .boton-remover y dale el siguiente formato:

    Una altura y un ancho de 50px.
    Un margen de 0px arriba y abajo y de 5px hacia los costados.
    Remové el borde.
    Un border-radius de 10px.
    Asigná el color rgb(255, 6, 46) al fondo y un tamaño tipográfico de 20px.




Conclusión
¡Felicitaciones!
¡Terminaste tu primera lista de tareas! A disfrutarlo así:



Este ejercicio te permitió integrar todos los conceptos trabajados hasta el momento y crear una herramienta útil para vos y para las personas que quieras.
🔍 Podés leer más sobre experiencia de usuario (para esta herramienta u otras que vayas haciendo) en el siguiente link.
🛎️ No te olvides de compartirlo en Discord ni de agregarlo a tu Portfolio.
 */

// Clase Item
class Item {
  constructor(nuevaTarea) {
    this.crearDiv(nuevaTarea);
  }

  // Método para crear un nuevo div con la tarea
  crearDiv(nuevaTarea) {
    // Crear un nuevo div
    const div = document.createElement('div');
    div.classList.add('item');

    // Crear un nuevo input
    const inputItem = document.createElement('input');
    inputItem.type = 'text';
    inputItem.classList.add('item-input');
    inputItem.value = nuevaTarea;
    inputItem.disabled = true;

    // Crear botones para editar y remover
    const botonEditar = document.createElement('button');
    botonEditar.classList.add('boton-editar');
    botonEditar.innerHTML = '<i class="fas fa-lock"></i>';

    const botonRemover = document.createElement('button');
    botonRemover.classList.add('boton-remover');
    botonRemover.innerHTML = '<i class="fas fa-trash"></i>';

    // Agregar elementos al div
    div.appendChild(inputItem);
    div.appendChild(botonEditar);
    div.appendChild(botonRemover);

    // Agregar el nuevo div al container
    container.appendChild(div);

    // Llamar a la función para agregar eventos
    this.agregarEventos(botonEditar, botonRemover, inputItem);
  }

  // Método para agregar eventos a los botones
  agregarEventos(botonEditar, botonRemover, inputItem) {
    // Agregar evento de clic al botón "EDITAR"
    botonEditar.addEventListener('click', () => {
      // Cambiar el estado del input y el ícono del botón
      inputItem.disabled = !inputItem.disabled;
      botonEditar.innerHTML = inputItem.disabled
        ? '<i class="fas fa-lock"></i>'
        : '<i class="fas fa-lock-open"></i>';
    });

    // Agregar evento de clic al botón "REMOVER"
    botonRemover.addEventListener('click', () => {
      // Remover el div
      const div = botonRemover.parentNode;
      div.remove();
    });
  }
}

// Función para comprobar si el input tiene valor y crear un nuevo Item
function chequearInput() {
  const nuevaTarea = inputPrincipal.value.trim();

  if (nuevaTarea !== '') {
    // Instanciar un nuevo Item
    new Item(nuevaTarea);

    // Limpiar el input
    inputPrincipal.value = '';
  }
}

// Referenciar el input principal, el botón agregar y el container
const inputPrincipal = document.querySelector('.input');
const botonAgregar = document.querySelector('.boton-agregar');
const container = document.querySelector('.container');

// Agregar evento de clic al botón "AGREGAR"
botonAgregar.addEventListener('click', chequearInput);
