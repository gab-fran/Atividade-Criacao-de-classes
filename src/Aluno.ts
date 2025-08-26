class Aluno {
    // Atributos
    private nome: string;
    private matricula: number;
    private curso: string;

    // Método contrutor
    constructor(_nome: string, _matricula: number, _curso: string) {
        this.nome = _nome;
        this.matricula = _matricula;
        this.curso = _curso;
    }

    // Métodos
    public estudar(materia: string): void {
        console.log(`O aluno ${this.nome} está estudando sobre ${materia}.`);
    }

    public entregarAtividade(): void {
        console.log(`O aluno ${this.nome} entregou a atividede.`);
    }
}

export default Aluno;
