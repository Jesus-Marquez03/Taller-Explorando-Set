// Ejercicio 1 //

const numeros = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

console.log(numeros);
console.log("Tamaño del Set:", numeros.size);

// Ejercicio 2 //

const numerosDuplicados = [1, 2, 3, 4, 5, 5, 6, 7, 7, 8, 9, 10];

const numerosSinDuplicados = new Set(numerosDuplicados);

const arregloFinal = [...numerosSinDuplicados];

console.log(arregloFinal);

// Ejercicio 3 //

const tieneDuplicados = (numeros) => {
    const numerosUnicos = new Set(numeros);

    return numeros.length !== numerosUnicos.size;
};

console.log(tieneDuplicados([1, 2, 3, 4, 5]));
console.log(tieneDuplicados([1, 2, 3, 3, 5]));

// Ejercicio 4 //

const conjuntoA = [1, 2, 3, 4, 5];
const conjuntoB = [4, 5, 6, 7, 8];

const setA = new Set(conjuntoA);
const setB = new Set(conjuntoB);

const interseccion = [...setA].filter(numero => setB.has(numero));

console.log(interseccion);

// Ejercicio 5 //

const conjuntoA = [1, 2, 3, 4, 5];
const conjuntoB = [4, 5, 6, 7, 8];

const setA = new Set(conjuntoA);
const setB = new Set(conjuntoB);

const diferencia = [...setA].filter(numero => !setB.has(numero));

console.log(diferencia);

// Ejercicio 6 //

const sonIguales = (arregloA, arregloB) => {
    const conjuntoA = new Set(arregloA);
    const conjuntoB = new Set(arregloB);

    if (conjuntoA.size !== conjuntoB.size) {
        return false;
    }

    for (const elemento of conjuntoA) {
        if (!conjuntoB.has(elemento)) {
            return false;
        }
    }

    return true;
};

console.log(sonIguales([1, 2, 3], [3, 2, 1]));
console.log(sonIguales([1, 2, 3], [4, 5, 6]));

// Ejercicio 7 //

const contarPalabrasUnicas = (texto) => {
    const palabras = texto.split(" ");
    const palabrasUnicas = new Set(palabras);

    return palabrasUnicas.size;
};

const texto = "Hola mundo mundo de JavaScript";

console.log(contarPalabrasUnicas(texto));

// Ejercicio 8 //

const invitados = new Set();

const agregarInvitado = (nombre) => {
    invitados.add(nombre);
};

const eliminarInvitado = (nombre) => {
    invitados.delete(nombre);
};

const mostrarInvitados = () => {
    console.log(invitados);
};

agregarInvitado("Ana");
agregarInvitado("Carlos");
agregarInvitado("Ana");

eliminarInvitado("Carlos");

mostrarInvitados();