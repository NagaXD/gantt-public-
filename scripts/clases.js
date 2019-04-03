
/*
La única forma de obtener verdadera privacidad en JS es a través del alcance, 
por lo que no hay forma de tener una propiedad que sea miembro de this eso será 
accesible solo dentro del componente. La mejor manera de almacenar datos realmente 
privados en ES6 es con un WeakMap.

Se puede utilizar un WeakMap para evitar el rendimiento y la penalización de memoria
 del enfoque anterior. WeakMaps asocia datos con Objetos (aquí, instancias) de tal manera
que solo se puede acceder usando ese Mapa Débil. Por lo tanto, usamos el método de 
variables de ámbito para crear un WeakMap privado, luego usamos ese WeakMap para 
recuperar datos privados asociados con this. Esto es más rápido que el método de 
variables de ámbito porque todas las instancias pueden compartir un único WeakMap,
por lo que no es necesario que vuelva a crear métodos solo para hacer que accedan 
a sus propios WeakMaps.
*/

let tarea = (function() {
    let privpadre = new WeakMap();
    let privfechainicio = new WeakMap();
    let privfechatermino = new WeakMap();
    let privnombre = new WeakMap();
    let privtipo = new WeakMap();
    let privavance = new WeakMap();

    class tarea {
        constructor(padre, fechainicio,fechatermino,nombre,tipo,avance) {
            privpadre.set(this, padre);
            privfechainicio.set(this, fechainicio);
            privfechatermino.set(this, fechatermino);
            privnombre.set(this, nombre);
            privtipo.set(this, tipo);
            privavance.set(this, avance);
        }

    //METODOS
    getPadre(){
        return privpadre.get(this);
    }

    }

    return tarea;
})();

let responsable = (function() {
    let nombre = new WeakMap();
    let rol = new WeakMap();

    class tarea {
        constructor(nombre,rol) {
            privnombre.set(this, nombre);
            privnrol.set(this, rol);
        }
    }
    return responsable;
})();

let rol = (function() {
    let nombre = new WeakMap();

    class tarea {
        constructor(rol) {

            privnombre.set(this, nombre);

            this.getNombre = function() {
                return privnombre.get(this);
            };

        }
    }

})();


function main(){
    
}