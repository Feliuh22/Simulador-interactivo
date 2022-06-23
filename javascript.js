function valorcuota(producto, cantidadcuotas) {
    return parseInt(producto / cantidadcuotas)
}

function mostrarMensaje(nombre, precio) {
    alert("Usted selecciono el producto " + nombre + " valor " + precio)
}

// seleccion de producto

function seleccionProducto() {
    let producto1 = 1000
    let producto2 = 500
    let producto3 = 8000
    let producto4 = 3000

    let seleccionProducto = 0

    do {
        seleccionProducto = parseInt(prompt("seleccione el producto deseado :\n1. producto 1\n2. producto 2\n3. producto 3\n4. producto 4"))

        switch (seleccionProducto) {
            case 1:
                mostrarMensaje("1", producto1)
                return producto1
            case 2:
                mostrarMensaje("2", producto2)
                return producto2
            case 3:
                mostrarMensaje("3", producto3)
                return producto3
            case 4:
                mostrarMensaje("4", producto4)
                return producto4
            default:
                alert("Usted selecciono un producto invalido")
                break
        }

    } while (seleccionProducto < 1 || seleccionProducto > 4 || isNaN(seleccionProducto))
}

// seleccion cantidad de cuotas

function seleccionCuotas(precio) {


    let seleccionCuotas = 0

    do {
        seleccionCuotas = parseInt(prompt("seleccione la cantidad de cuotas:\n1. 3 pagos sin interes\n2. 6 pagos sin interes\n3. 18 pagos sin interes"))

        if (seleccionCuotas == 1) {
            alert("Usted selecciono 3 pagos sin interes\n" + "valor de la cuota es : $ " + valorcuota(precio, 3))
        } else if (seleccionCuotas == 2) {
            alert("Usted selecciono 6 pagos sin interes\n" + "valor de la cuota es : $ " + valorcuota(precio, 6))
        } else if (seleccionCuotas == 3) {
            alert("Usted selecciono 18 pagos sin interes\n" + "valor de la cuota es : $ " + valorcuota(precio, 18))
        } else {
            alert("Usted selecciono un valor de cuotas invalido")
        }

    } while (seleccionCuotas < 3 || seleccionCuotas > 6 || isNaN(seleccionCuotas))
}

// confirmacion de compra 

function confirmar() {

    let confirmacion = prompt("¿Quiere realizar su compra? Si/No")

    if (confirmacion.toLowerCase() == "si") {
        alert("¡Gracias por su compra!")
    } else {
        alert("¡Gracias por visitarnos!")
    }
}

// funcion para dar orden a otras funciones

function principal() {
    alert("¡bienvenido/a a Mercadona, tu tienda digital!")

    let precio = seleccionProducto()

    seleccionCuotas(precio)

    confirmar()
}

// iniciador de las funciones

principal()