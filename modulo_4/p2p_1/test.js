function contador(numero) {
  var _cont = numero;
  function aumentar() {return ++_cont};
  function reducir() {return --_cont};
  function numero() {return _cont};
  return {
    aumentar:aumentar,
    reducir:reducir,
    numero:numero
    }
}
// Llamada de la funcion
var cont1 = contador(9);
console.log(cont1.aumentar());