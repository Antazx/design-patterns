# Patrones de diseño
Soluciones probadas a problemas recurentes que pueden ser reutilizadas. Simplificamos problemas, estructuramos código y mejoramos la mantenibilidad.

## Tipos de patrones:
- Creacionales
- Estructurales
- De comportamiento

### Patrones creacionales
- Patrón constructor
- Patrón constructor con prototipo: podemos elegir que todos los métodos o propiedades que asignemos al prototipo no van a ser copiadas a las instancias de nuevos objetos. El prototipo se comparte a lo largo de todas las instancias, si se modifica en una instancia se modifica en todas. Utiliamos menos espacio en memoria pero las modificaciones afectan a todas las instancias.
- Módulo: definimos un objeto de manera literal, sus propiedades y sus métodos que serán los encargados de permitirnos acceder a las propiedades del módulo.
- Módulo revelador: a diferencia del patrón módulo, módulo revelador contiene una API pública y otra privada. Nos permite utilizar una función para crear nuestro módulo haciendo uso de los IIFE. Dentro del IIFE colocamos las propiedades que queremos que sean privadas y devolvemos las que queremos que sean accesibles
- Prototipo: Nos permite tomar un objeto definido y generar prototipos para otros objetos eliminando duplicidades de código.

### Patrones funcionales
- Closures: no son un patrón, son una funcionalidad de js para poder reutilizar código.

- Point-free: es un paradigma o estilo de programación donde nos liberamos del punto, en este caso el argumento o los argumentos de la funcinón.Es una técnica utilizadad para la composición de funcionaes y elminina código boilerplate.

- Currying: técnica que transforma todas las funciones en funciones unarias, que solamente reciben un argumento.

- Composición: se trata de descomponer el código en funcionalidades más pequeñas que puedan ser reutilizadas a lo largo del código. La idea es crear una función compose capaz de agrupar estas funcionalidades en el orden que deseemos y pasarle los datos para funcionar.

### Patrones estructurales
- Mixin: el patrón mixin nos va a ayudar a agregar funcionalidad a una clase ya existente, sin necesidad de alterar la clase. En la práctica no es más que definir un objeto con la funcionalidad a añadir y realizar un Object.assing(Clase.prototype, nuevaFuncionalidad), esto nos permite añadir nueva funcionalidad a clases ya existentes.

- Decorador: va a agregar nueva funcionalidad a las instancias existentes de una clase, al contrario que el mixin que añade esta funcionalidad sobre el prototipo.

- Facade: se utiliza cuando queremos simplificar la llamada a una función. No es más que hacer un wrapper de una funcionalidad para simplificar el uso de la misma.

- Adaptador: necesitamos actualizar la forma de utilizar cierta funcionalidad y queremos que esta actualización no tenga efectos no deseados en el código que ya usa esta funcionalidad. Evitamos modificar todo el código existente para funcionar con esta nueva actualización.

### Patrones de comportamiento

- Observador: publish/suscribe, interactuan entre si y escuchan las modificaciones de uno sobre el otro. Si ocurre un evento el otro objeto lo conoce y ejecuta cierta logica.

- Mediador: trabaja como intermediario a la hora de emitir/escuchar eventos.

- Comando: entrega una interfaz unificada para poder ejecutar los metodos de algún objeto, en vez de llamar al metodo del objeto, ejecutaremos un metodo con una nomenclatura previa (run, init, exec ...) seguido de los datos a pasar.

- Cadena de responsabilidad: se basa en que nosotros encapsulamos un dato y vamos agregando métodos para alterar este valor. Tipico objeto.metodo(1).metodo(2)... Se retorna this desde los métodos, permitiendo ejecutarlos en una cadena.

- Iterador: nos permite iterar por una estructura proporcionandonos los metodos de avanzar por la estructura, el valor, o si hemos recorrido toda la estructura. Muy sencillo de implmentar con funciones generadoras function*

### Otros patrones

- IFFE: Funciones invocadas inmediatamente.

- Inyección de dependencias: 