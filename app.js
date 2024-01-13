alert('Boas vindas ao jogo do número secreto, você tem 10 tentativas para acertar.'); 
let numeroMaximo = 500;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log (numeroSecreto)
let chute;
let tentativas = 1

//enquanto o chute não for igual ao n. s.
while (chute != numeroSecreto && tentativas <= 10){
    chute = prompt(`Digite um número entre 1 e ${numeroMaximo} `);
    // Se o chute for igual ao número secreto
    if (chute == numeroSecreto ){
        break;
        //se o chute for maior ou menor que n.s., recebe dica.
    } else {
        if (chute > numeroSecreto){
            alert(`O número secreto é menor que ${chute}`);
        }else{
            alert(`O número secreto é maior que o ${chute}`);
        }
        //tentativas = tentativas + 1
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu, o número secreto ${numeroSecreto} com ${tentativas} tentativa ${palavraTentativa}.`);