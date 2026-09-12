let operacao = '';

function calculo(escolha) {
    operacao = escolha;
    console.log(operacao);
}

class Coleta {
    #Input_N1;
    #Input_N2;
    #divResultado;

    constructor() {
        this.#Input_N1 = document.getElementById("n1m");
        this.#Input_N2 = document.getElementById("n2m");
        this.#divResultado = document.getElementById("resultado");
    }

    obterDadosFormulario() {
        const N1m = this.#Input_N1.value.trim();
        const N2m = this.#Input_N2.value.trim();

        if (!N1m || !N2m) {
            this.#divResultado.innerText = "Insira os números corretamente!";
            return null; 
        }

        return {
            num1: Number(N1m),
            num2: Number(N2m),
            resposta: this.#divResultado
        };
    }
}

function Calculacoes() {

    const ConstColeta = new Coleta();
    

    const Puxandodelá = ConstColeta.obterDadosFormulario();

    if (Puxandodelá === null) {
        return;
    }

    if (operacao === '') {
        Puxandodelá.resposta.innerText = "Escolha uma operação!";
        return;
    }

    let GrandFinale = 0;

    if (operacao === "-") {
        GrandFinale = Puxandodelá.num1 - Puxandodelá.num2;
    } 
    else if (operacao === "+") {
        GrandFinale = Puxandodelá.num1 + Puxandodelá.num2;
    } 
    else if (operacao === "/") {
        if (Puxandodelá.numero2 === 0) {
            Puxandodelá.resposta.innerText = "Divisão Inválida, tá ok?";
            return;
        }
        GrandFinale = Puxandodelá.num1 / Puxandodelá.num2;
    } 
    else if (operacao === "*") {
        GrandFinale = Puxandodelá.num1 * Puxandodelá.num2;
    } 
    else {
        alert("Isso nem é possível");
        return;
    }

    Puxandodelá.resposta.innerText = "Resultado: " + GrandFinale;
}