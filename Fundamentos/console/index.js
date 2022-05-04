// Variáveis

const nome = "João";
const pi = 3.14;
const numeroDaSorte = 7;

console.log(nome, pi, numeroDaSorte);

// Contagem de impressões

console.count(`O valor de pi é ${pi}, contagem`);
console.count(`O valor de pi é ${pi}, contagem`);
console.count(`O valor de pi é ${pi}, contagem`);
console.count(`O valor de pi é ${pi}, contagem`);

// Variáveis entre strings

console.log("O nome dele é %s, ele é programador",nome);

// Limpar o console

setTimeout(()=>{
    console.clear();
}, 2000);