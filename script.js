let productos = {
    menus: {
        'Grand Big Boot': 8.5,
        'Big Boot': 8,
        'BootPollo': 7.50,
        'Cuarto de libra': 7,
        'BootRoyal Deluxe': 7
    },
    burgers: {
        'Grand Big Boot': 6,
        'Big Boot': 5.5,
        'BootPollo': 5,
        'Cuarto de libra': 4.5,
        'BootRoyal Deluxe': 4.5
    },
    drinks: {
        'CocaCola': 2,
        'Fanta': 2,
        'Agua': 1,
        'Cerveza': 2.5
    },
    fries: 1,
};
let cestaPrecio = [];
let cestaNombre = [];
let lista = document.getElementById('pedidoTotal');
let precio = document.getElementById('precioTotal');
let listaRecu = document.getElementById('pedidoTotalRecuperado');
let precioRecu = document.getElementById('precioTotalRecuperado');
let suma = 0;
let sumaRecu = 0;
let k = 0;
let texto = '';
function pedidoAnterior() {
    let recuperaNombre = JSON.parse(window.localStorage.getItem('cestaNombre'));
    let recuperaPrecio = JSON.parse(window.localStorage.getItem('cestaPrecio'));
    for (let i = 0; i < recuperaNombre.length; i++) {
        listaRecu.innerHTML += `<p>`;
        listaRecu.innerHTML += recuperaNombre[i];
        listaRecu.innerHTML += `</p>`;
    }

    for (let j = 0; j < recuperaPrecio.length; j++) {
        sumaRecu = sumaRecu + recuperaPrecio[j];
    }

    precioRecu.innerHTML = `Total: ${sumaRecu}`;
}

function menu(i) {
    cestaNombre.push(i);
    cestaPrecio.push(productos.menus[i]);
}
function burger(i) {
    cestaNombre.push(i);
    cestaPrecio.push(productos.burgers[i]);
}
function bebidas(i) {
    cestaNombre.push(i);
    cestaPrecio.push(productos.drinks[i]);
}
function calculoTotal() {
    if (k !== cestaNombre.length) {
        for (let i = k; i < cestaNombre.length; i++) {
            texto += `<p>`;
            texto += cestaNombre[i];
            texto += `</p>`;
        }
        lista.innerHTML = texto;
    }
    if (k !== cestaNombre.length) {
        for (let j = k; j < cestaPrecio.length; j++) {
            suma = suma + cestaPrecio[j];
        }
    }
    k = cestaNombre.length;

    precio.innerHTML = `Total: ${suma}`;
}
function reset() {
    window.localStorage.setItem('cestaNombre', JSON.stringify(cestaNombre));
    window.localStorage.setItem('cestaPrecio', JSON.stringify(cestaPrecio));
    cestaNombre = [];
    cestaPrecio = [];
    lista.innerHTML = '';
    suma = 0;
}

function mostrarMenu() {
    document.getElementById('menu').style.display = 'flex';
}
function mostrarBurger() {
    document.getElementById('burger').style.display = 'flex';
}
function mostrarBebida() {
    document.getElementById('bebida').style.display = 'flex';
}
function mostrarTotal() {
    document.getElementById('total').style.display = 'flex';
}
function volverMenu() {
    document.getElementById('menu').style.display = 'none';
}
function mostrarPedido() {
    document.getElementById('recuperacion').style.display = 'flex';
}
function volverAnterior() {
    document.getElementById('recuperacion').style.display = 'none';
}
function volverBurger() {
    document.getElementById('burger').style.display = 'none';
}
function volverBebida() {
    document.getElementById('bebida').style.display = 'none';
}
function volverTotal() {
    document.getElementById('total').style.display = 'none';
}