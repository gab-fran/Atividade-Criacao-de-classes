import Aluno from "./Aluno.js";
import Livro from "./Livro.js";
import Carro from "./Carro.js";

let aluno1: Aluno = new Aluno("Felisberto Felis", 20251234, "Economia");
let aluno2: Aluno = new Aluno("Roberta Campos", 20257845, "Educação Fisica");

let livro1: Livro = new Livro("Bobbie Goods", "Ursinho", 320);
let livro2: Livro = new Livro("1984", "George Orwell", 328);

let carro1: Carro = new Carro("Toyota Corolla", 2020, "Prata");
let carro2: Carro = new Carro("Honda Civic", 2019, "Preto");

console.clear();

console.log(`\n Classe Aluno:`);

aluno1.estudar("Juros compostos");
aluno2.estudar("Anatomia")

aluno1.entregarAtividade();
aluno2.entregarAtividade();

console.log(`\n Classe Livro:`);

livro1.ler();
livro2.ler();

livro1.exibirDetalhes();
livro2.exibirDetalhes();

console.log(`\n Classe Carro:`);

let ligado1: boolean = carro1.ligar();
let ligado2: boolean = carro2.ligar();

if (ligado1) {
    carro1.acelerar(80);
}

if (ligado2) {
    carro2.acelerar(100);
}
