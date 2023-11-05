/**
 * Ejercicon 1
 */

function suma(a, b, callback) {
  let c = a + b;
  callback();
}
/*¿Que es el tercer parámetro recibido?
El tercer parámetro "callback" es una función pasada como argumento.   

¿En que casos es obligatorio desarrollar este tipo de funciones?
Este tipo de funciones se utiliza para continuar la ejecucion del código 
una vez que se haya completado una operacion asincrónica o sincrónica.
*/

//llamada a la funcion
let a = 5;
let b = 3;

suma(a, b, callback);

function callback() {
  console.log("El callback se ha ejecutado despues del código.");
}
