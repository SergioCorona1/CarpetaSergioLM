let numeros = [4,2,31,3,41,2,5,7,343,78,8,97,67,6,2,21,24,10];

function agregarNumero() {
    let entrada = document.getElementById('entradaNumero');
    let numero = parseFloat(entrada.value);
    
    if (!isNaN(numero)) {
        numeros.push(numero);
        entrada.value = '';
        actualizarListaNumeros();
        mostrarResultado(`Número ${numero} añadido correctamente`);
    } else {
        mostrarResultado('Por favor, ingrese un número válido');
    }
}

function calcularSuma() {
    if (numeros.length === 0) {
        mostrarResultado('No hay números en la lista');
    } else {
        let suma = 0;
        for (let i = 0; i < numeros.length; i++) {
            suma += numeros[i];
        }
        mostrarResultado(`La suma de todos los números es: ${suma}`);
    }
}


function encontrarMaximo() {
    if (numeros.length === 0) {
        mostrarResultado('No hay números en la lista');
    } else {
        let maximo = numeros[0];
        for (let i = 1; i < numeros.length; i++) {
            if (numeros[i] > maximo) {
                maximo = numeros[i];
            }
        }
        mostrarResultado(`El número más grande es: ${maximo}`);
    }
}

function encontrarMinimo() {
    if (numeros.length === 0) {
        mostrarResultado('No hay números en la lista');
    } else {
        let minimo = numeros[0];
        for (let i = 1; i < numeros.length; i++) {
            if (numeros[i] < minimo) {
                minimo = numeros[i];
            }
        }
        mostrarResultado(`El número más pequeño es: ${minimo}`);
    }
}

function encontrarPosicion() {
    let entradaBusqueda = document.getElementById('entradaBusqueda');
    let numeroBuscado = parseFloat(entradaBusqueda.value);
    
    if (isNaN(numeroBuscado)) {
        mostrarResultado('Por favor, ingrese un número válido para buscar');
    } else {
        let posiciones = [];
        for (let i = 0; i < numeros.length; i++) {
            if (numeros[i] === numeroBuscado) {
                posiciones.push(i + 1);
            }
        }
        
        if (posiciones.length > 0) {
            mostrarResultado(`El número ${numeroBuscado} se encuentra en la(s) posición(es): ${posiciones.join(', ')}`);
        } else {
            mostrarResultado(`El número ${numeroBuscado} no se encuentra en la lista`);
        }
        entradaBusqueda.value = '';
    }
}

function mostrarTodos() {
    if (numeros.length === 0) {
        mostrarResultado('No hay números en la lista');
    } else {
        mostrarResultado(`Números en la lista: ${numeros.join(', ')}`);
    }
}


function mostrarResultado(mensaje) {
    let divResultados = document.getElementById('resultados');
    divResultados.textContent = mensaje;
}


function actualizarListaNumeros() {
    const divListaNumeros = document.getElementById('listaNumeros');
    divListaNumeros.textContent = `Lista actual: [${numeros.join(', ')}]`;
}


document.getElementById('entradaNumero').addEventListener('keypress', function(evento) {
    if (evento.key === 'Enter') {
        agregarNumero();
    }
});

document.getElementById('entradaBusqueda').addEventListener('keypress', function(evento) {
    if (evento.key === 'Enter') {
        encontrarPosicion();
    }
});