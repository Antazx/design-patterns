# Patrones de diseño
Soluciones probadas a problemas recurentes que pueden ser reutilizadas. Simplificamos problemas, estructuramos código y mejoramos la mantenibilidad.

## Tipos de patrones:
- Creacionales
- Estructurales
- De comportamiento

### Patrones creacionales
- Patron constructor
- Patron constructor con prototipo: podemos elegir que todos los métodos o propiedades que asignemos al prototipo no van a ser copiadas a las instancias de nuevos objetos. El prototipo se comparte a lo largo de todas las instancias, si se modifica en una instancia se modifica en todas. Utiliamos menos espacio en memoria pero las modificaciones afectan a todas las instancias.
- Módulo: definimos un objeto de manera literal, sus propiedades y sus métodos que serán los encargados de permitirnos acceder a las propiedades del módulo.
- Módulo revelador: a diferencia del patrón módulo, módulo revelador contiene una API pública y otra privada. Nos permite utilizar una función para crear nuestro módulo haciendo uso de los IIFE. Dentro del IIFE colocamos las propiedades que queremos que sean privadas y devolvemos las que queremos que sean accesibles
- Prototipo: Nos permite tomar un objeto definido y generar prototipos para otros objetos eliminando duplicidades de código.