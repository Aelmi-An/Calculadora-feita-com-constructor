        let Operação = '';
           function calculo(escolha){
           Operação = escolha;
           console.log(Operação)
           }

           class Dígitos{
        #N1m
        #N2m
        #Func

            constructor(parameters) {
        this.#N1m=N1m
        this.#N2m=N2m
        this.#Func=Func
            }
           }
        class Coleta{
        #Input_N1
        #Input_N2
        #Input_Ope
        #Btn_Calcular
        #divResultado
        constructor(){
            this.#Input_N1=document.getElementByID("n1m")
            this.#Input_N2=document.getElementByID("n2m")
            this.#Btn_Calcular=document.getElementByID("btnCalcular")
            this.#divResultado=document.getElementByID("resultado")
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
    }
        calcularIdade() {
       if(Operação="-"){

       };
       else if(Operação="+"){

       };
       else if(Operação="/"){

       };
       else if(Operação="*"){

       };
       else{
        alert("Isso nem é possível")
       };
    }
