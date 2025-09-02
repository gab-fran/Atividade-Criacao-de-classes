import Aluno from "./Aluno.js";
import Livro from "./Livro.js";
import Carro from "./Carro.js";

// Criação de objetos da classe Aluno
let aluno1: Aluno = new Aluno("Felisberto Felis", 20251234, "Economia");
let aluno2: Aluno = new Aluno("Roberta Campos", 20257845, "Educação Fisica");

// Criação de objetos da classe Livro
let livro1: Livro = new Livro("Bobbie Goods", "Ursinho", 320);
let livro2: Livro = new Livro("1984", "George Orwell", 328);

// Criação de objetos da classe Carro
let carro1: Carro = new Carro("Toyota Corolla", 2020, "Prata");
let carro2: Carro = new Carro("Honda Civic", 2019, "Preto");

console.clear();

console.log(`\n Classe Aluno:`);

// Chamadas dos métodos estudar e entregarAtividade da classe Aluno
aluno1.estudar("Juros compostos");
aluno2.estudar("Anatomia")

aluno1.entregarAtividade();
aluno2.entregarAtividade();

console.log(`\n Classe Livro:`);

// Chamadas dos métodos ler e exibirDetalhes da classe Livro
livro1.ler();
livro2.ler();

livro1.exibirDetalhes();
livro2.exibirDetalhes();

console.log(`\n Classe Carro:`);

// Chamadas dos métodos ligar e acelerar da classe Carro
if (carro1.ligar()) {
    carro1.acelerar(80);
}

if (carro2.ligar()) {
    carro2.acelerar(100);
}

