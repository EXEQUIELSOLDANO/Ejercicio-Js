
/*Ejercicio numero 1 cluster 2*/
var num = ""
var inc = prompt("Por favor ingrese un numero entero menor a 10")
function piramide(num) {
  for (var i = 1; i <= inc; i++) {
    num = num + i
    console.log(num);
  }
}
piramide(num)

/*Ejercicio numero 2 cluster 2*/

function coincidencias(array1, array2) {
  array1 = ["auto", "laptop", "motocicleta", "perro", "casa"];
  array2 = ["perro", "avion", "perro", "foto", "silla"];

  let cosasencomun = [];

  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array2[j] === array1[i]) {
        cosasencomun.push(array2[j])
      }

    }

  }
  return console.log(cosasencomun)
}
coincidencias();

/*Ejercicio numero 3.1 cluster 2*/

class Carrito {
  constructor() {
    this.montoTotal = 10;
    this.producto = ["leche"];
  }
  agregarNuevoProducto(nombre, precio, unidades) {
  
    this.montoTotal = this.montoTotal + (precio * unidades)
    this.producto.push(nombre)  
  }
  validacion(){
    try {
      if (this.producto===this.nombre) {
        this.montoTotal = this.montoTotal + (precio * unidades)
        this.producto.push(nombre)
      }else{
        console.log(`El producto ${this.nombre} que desea agregar ya esta en su lista de compras, tiene ${this.unidades} unidades. `);
      }
    } catch (error) {
      return this.agregarNuevoProducto();
    }
    
  }
}
const carrito1 = new Carrito()
console.log(carrito1)
const carrito2=new Carrito()
carrito2.agregarNuevoProducto("azucar",5,2)
console.log(carrito2)
const carrito3=new Carrito()
carrito3.validacion();
carrito3.agregarNuevoProducto("azucar",5,2)
console.log(carrito3)














