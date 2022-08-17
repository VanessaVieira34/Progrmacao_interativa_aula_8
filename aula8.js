//Criar variaveis para a altura e se está acompanhado, controles manuais.

let altura = 1.30;
let acompanhada = true;

//Função de condição.

function podeSubir(altura, acompanhada){
    if(altura >= 1.40 && altura <= 2.0){
         return true;
    }
    else if((altura < 1.40 && altura >= 1.20) && acompanhada){
        return true;
    }
    else{
        return false;
    }
    
}

//Chamar a função.

console.log(podeSubir(altura, acompanhada));

//Função de condição.

function podeSubirTexto(altura, acompanhada){
    if(altura >= 1.40 && altura <= 2.0){
        return "Acesso permitido";
    }
    else if((altura <= 1.40 && altura >= 1.20) && acompanhada){
        return "Acesso permitido";
    }
    else {
        return "Acesso negado";
    }
}
altura = 1.30;
acompanhada = false;

//Chamar a função.

console.log(podeSubirTexto(altura, acompanhada));