/**
 * Created by zukutruleSSD on 23/05/2015.
 */
function agenda (titulo, inic) {//CLOSURE O CIERRE
    var _titulo = titulo;
    var _contenido = inic;

    return {
        titulo: function()           { return _titulo; },
        meter:  function(nombre, tf) { _contenido[nombre]=tf; },
        tf:     function(nombre)     { return _contenido[nombre]; },
        borrar: function(nombre)     { delete _contenido[nombre]; },
        toJSON: function()           { return JSON.stringify(_contenido);},
        listar: function() {
            var output = "";
            for (nombre in _contenido)
            {
                output += nombre +", "+ _contenido[nombre] +"\n";
            }
            return output;
        }
    }
}
var amigos = agenda ("Amigos",
    { Pepe: 113278561,
        José: 157845123,
        Jesús: 178512355
    });
var text = amigos.listar();
console.log("amigos \n------\n"+ text);