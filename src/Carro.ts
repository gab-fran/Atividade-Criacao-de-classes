class Carro {
    // Atributos
    private modelo: string;
    private ano: number;
    private cor: string;

    // Método contrutor
    constructor(_modelo: string, _ano: number, _cor: string) {
        this.modelo = _modelo;
        this.ano = _ano;
        this.cor = _cor;
    }
    public getModelo(): string {
        return this.modelo;
    }
    public setModelo(_modelo: string): void {
        this.modelo = _modelo;
    }

    public getAno(): number {
        return this.ano;
    }
    public setAno(_ano: number) {
        this.ano = _ano;
    }

    public getCor(): string {
        return this.cor;
    }
    public setCor(_cor: string) {
        this.cor = _cor;
    }

    // Métodos
    public ligar(): boolean {
        const numeroAleatorio = Math.random();
        if (numeroAleatorio < 0.5) {
            return true;
        }
        else {
            console.log(`O carro ${this.modelo} não está ligado`);
            return false;
        }
    }

    public acelerar(velocidade: number): void {
        console.log(`O carro ${this.modelo} está acelerando a ${velocidade} km/h.`);
    }
}

export default Carro;

