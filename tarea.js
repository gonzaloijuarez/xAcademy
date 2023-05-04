
/* aqui vamos a comenzar a hacer la trea en el orden de los ejercicios  */

/* ejercicio 1 */
/* function piramide(numero){
    numeros = []
    for(let i = 1; i <= numero; i++){
        numeros.push(i);
        contador = console.log(numeros);
    }
    return contador
}
piramide(6)
piramide(3)
 */
/* Ejercicio 2 */

/* let numero1 = [1,2,3,4,5,false,true,"pera", "kiwi"]
let numero2 = [1,6,7,3,4,true,"pera", "durazno"]
let cosas1 = ["pelota de tenis",1,4,10,167,true]
let cosas2 = ["pelota de tenis",5,34,4,1,19,167,true,false]

function comparar(array1,array2){
    let coincidencia = [];
for (let index = 0; index < array1.length; index++) {
    const element1 = array1[index];
        for (let index = 0; index < array2.length; index++) {
            const element2 = array2[index];
            if (element1 === element2){
                coincidencia.push(element1);

            } 
        }
    }
     return console.log("los elementos que coinciden son: "+ coincidencia);
}

comparar(numero1,numero2)
comparar(cosas1,cosas2)   */

/* Ejercicio 3-a-b-c*/


class carritoDeCompra{

    constructor(montoTotal,productos,totalUnidades){
        this.montoTotal = montoTotal;
        this.productos = [productos]
        this.totalUnidades = totalUnidades;
    }
    
    

    agregarAlCarrito(producto, precio, unidades){
        if(this.productos.includes(producto)){
            console.log(`\n Dentro de los ${this.totalUnidades} productos en el carrito ya tienes agregado ${producto} \n ` )
        }

        else {
        this.productos.push(producto)
        this.montoTotal += precio 
        this.totalUnidades +=  unidades 
    }
    }
    }
        

let carrito1 = new carritoDeCompra (10,"leche",0)
console.log(carrito1)

carrito1.agregarAlCarrito("Azucar", 5, 2)
console.log(carrito1)

carrito1.agregarAlCarrito("Azucar", 5, 2)
console.log(carrito1)

