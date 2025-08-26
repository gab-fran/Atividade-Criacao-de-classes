class Livro {
    // Atributos
    private titulo: string;
    private autor: string;
    private paginas: number;

    // Método contrutor
    constructor(_titulo: string, _autor: string, _paginas: number) {
        this.titulo = _titulo;
        this.autor = _autor;
        this.paginas = _paginas;
    }

    // Métodos
    public ler(): void {
        console.log(`Lendo o livro ${this.titulo}.`);
    }

    public exibirDetalhes(): void {
        console.log(`Título: ${this.titulo}, Autor: ${this.autor}, Páginas: ${this.paginas}`);
    }
}

export default Livro;
