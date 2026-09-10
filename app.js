
class Pessoa {
    #n2m;
    #n1m;
    #Calc;

    constructor(n1m, n2m, Calc) {
        this.#n1m = n1m;
        this.#n2m = n2m;
        this.#Calc = Calc;
    }

   
    obterNomeCompleto() {
        return `${this.#n1m} *${this.#Calc} *${this.#n2m}`;
    }


    calcularIdade() {
       if(){

       };
       else if(){

       }
       else if(){

       }
       else if(){

       }
       else{
        alert("Você não sabe usar uma calculadora")
       }
    }
}


class PessoaUI {
    #inputNome;
    #inputSobrenome;
    #inputAnoNascimento;
    #btnCalcular;
    #divResultado;

    constructor() {
        // Mapeia os elementos HTML
        this.#inputNome = document.getElementById('nome');
        this.#inputSobrenome = document.getElementById('sobrenome');
        this.#inputAnoNascimento = document.getElementById('anoNascimento');
        this.#btnCalcular = document.getElementById('btnCalcular');
        this.#divResultado = document.getElementById('resultado');

        // Configura o evento do botão
        this.#configurarEventos();
    }

    #obterDadosFormulario() {
        const nome = this.#inputNome.value.trim();
        const sobrenome = this.#inputSobrenome.value.trim();
        const anoNascimento = parseInt(this.#inputAnoNascimento.value);

        if (!nome || !sobrenome || isNaN(anoNascimento)) {
            throw new Error("Por favor, preencha todos os campos corretamente.");
        }

        return { nome, sobrenome, anoNascimento };
    }

    #processarCalculo() {
        try {
            // 1. Coleta e valida as entradas do formulário
            const { nome, sobrenome, anoNascimento } = this.#obterDadosFormulario();

            // 2. Instancia a classe de domínio Pessoa
            const pessoa = new Pessoa(nome, sobrenome, anoNascimento);

            // 3. Obtém as informações processadas
            const nomeCompleto = pessoa.obterNomeCompleto();
            const idade = pessoa.calcularIdade();

            // 4. Exibe o resultado no HTML
            this.#divResultado.style.color = "#155724";
            this.#divResultado.innerHTML = `Olá, <strong>${nomeCompleto}</strong>!<br>Você tem (ou fará) <strong>${idade} anos</strong> este ano.`;

        } catch (erro) {
            // Tratamento e exibição de mensagens de erro
            this.#divResultado.style.color = "#721c24";
            this.#divResultado.textContent = erro.message;
        }
    }

    #configurarEventos() {
        // Associa o clique do botão ao método de processamento
        this.#btnCalcular.addEventListener('click', () => {
            this.#processarCalculo();
        });
    }
}

// Inicializa a interface ao carregar o DOM
window.addEventListener('DOMContentLoaded', () => {
    new PessoaUI();
});