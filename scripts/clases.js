
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

    //METODOS SET Y GETS
    getPadre(){
        return privpadre.get(this);
    }

    getFechainicio(){
        return privfechainicio.get(this);
    }

    getFechatermino(){
        return privfechatermino.get(this);
    }

    getNombre(){
        return privnombre.get(this);
    }

    getTipo(){
        return privtipo.get(this);
    }

    getAvance(){
        return privavance.get(this);
    }

    setPadre(valor){
        privpadre.set(this,valor);
    }

    setFechainicio(valor){
        privfechainicio.set(this,valor);
    }

    setFechatermino(valor){
        privfechatermino.set(this,valor);
    }

    setNombre(valor){
        privnombre.set(this,valor);
    }

    setTipo(valor){
        privtipo.set(this,valor);
    }

    setAvance(valor){
        privavance.set(this,valor);
    }

    }

    return tarea;
})();

let responsable = (function() {
    let nombre = new WeakMap();
    let rol = new WeakMap();

    class responsable{
        constructor(nombre,rol) {
            privnombre.set(this, nombre);
            privnrol.set(this, rol);
        }
        
        //METODOS SETS Y GETS

        getNombre(){
            return privnombre.get(this);
        }

        getRol(){
            return privrol.get(this);
        }

        setNombre(valor){
            privnombre.set(this,valor);
        }

        setRol(valor){
            privrol.set(this,valor);
        }

    }

    return responsable;
})();

let rol = (function() {
    let nombre = new WeakMap();

    class rol{
        constructor(rol) {
            privnombre.set(this, nombre);
        }
    getNombre(){
            return privnombre.get(this);
        }

    setNombre(valor){
            privnombre.set(this,valor);
    }

    }
    return rol;
})();

let arregloTareas = (function() {
    let privarreglodeTareas = new Array();
    
    class arregloTareas {
        constructor(tarea) {
          let objetoTarea = new WeakMap();
          objetoTarea.set(this,tarea);
          privarreglodeTareas.push(objetoTarea);  
        }
    getarregloTareas(i){
            return privarreglodeTareas[i].get(this,tarea);
        }

    setarregloTareas(valor){
        let objetoTarea = new WeakMap();
        objetoTarea.set(this,valor); 
        privarreglodeTareas.push(objetoTarea);  
    }

    }
    return arregloTareas;
})();


function main(){
    let unatarea = new tarea('hola','hola','hola','hola','hola','hola');
    let dostarea = new tarea('hola2','hola2','hola2','hola2','hola2','hola2');
    let miarreglo = new arregloTareas(unatarea);
    miarreglo.setarregloTareas(dostarea);
    
    console.log(miarreglo.getarregloTareas(0).getNombre());
    console.log(miarreglo.getarregloTareas(1).getNombre());
}