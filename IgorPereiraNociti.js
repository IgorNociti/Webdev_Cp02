//Primeiro exercício
function numerosPrimos(numero) {
    if (numero <= 1) return false;
    for (let i = 2; i < numero; i++) {
        if (numero % i == 0) return false;
    }
    return true;
}

let teste = parseInt(prompt("Digite um número para verificar se é primo:"));

if (numerosPrimos(teste)) {
    console.log(teste + " é um número primo.");
} else {
    console.log(teste + " não é um número primo.");
}

//Segundo exercício
function numerosPrimos(numero) {
    if (numero <= 1) return false;
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) return false;
    }
    return true;
}

function contarPrimos(x, y) {
    let contadorPrimos = 0;

    for (let i = x; i <= y; i++) {
        if (numerosPrimos(i)) {
            contadorPrimos++;  
        }
    }

    console.log(`Existem ${contadorPrimos} números primos entre ${x} e ${y}.`); // Corrigi aqui: "contarPrimos" para "contadorPrimos"
}
contarPrimos(1, 10);

//Terceiro exercício
function contarMoedas(valor) {
    const moedas = [100, 50, 10, 5, 1]; 

    for (let moeda of moedas) {
        const quantidade = Math.floor(valor / moeda); 
        console.log(`${quantidade} moeda(s) de M$ ${moeda}`); 
        valor -= quantidade * moeda; 
    }
}

contarMoedas(150);

//Quarto Exercício
function fibonacci(n) {
    let a = 1, b = 1; 
    console.log(a); 

    if (n > 1) {
        console.log(b); 
    }

    for (let i = 3; i <= n; i++) {
        const proximoTermo = a + b; 
        console.log(proximoTermo); 
        a = b; 
        b = proximoTermo; 
    }
}
fibonacci(10);

//Fim do Cp