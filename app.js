        let Operação = '';
           function calculo(escolha){
           Operação = escolha;
           console.log(Operação)
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
        const N1m = this.#inputNome.value.trim();
        const N2m = this.#inputSobrenome.value.trim();
        const Resposta = this.#divResultado
        if (!N1m || !N2m) {
            throw new Error("Insira os números corretamente");
        }
      }
    }
        Calculações() {
       if(Operação="-"){
         let Resultado = N1m-N2m;
       };
       else if(Operação="+"){
         let Resultado = N1m-N2m;
       };
       else if(Operação="/"){
          if(N2m == 0){
         Resposta.innerText
          }
       };
       else if(Operação="*"){
         let Resultado = N1m*N2m;
       };
       else{
        alert("Isso nem é possível")
       };
    }
