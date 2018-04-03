export class Selecao {
    Nome: string = null;
    // Jogos: number = 0;
    Pontos: number = 0;
    Vitorias: number = 0;
    Empates: number = 0;
    Derrotas: number = 0;
    GP: number = 0;
    GC: number = 0;
    SG: number = 0;


    constructor(values: Object = {}) {
        Object.keys(this).forEach(key => {
            if (values.hasOwnProperty(key))
                this[key] = values[key];
        });
    }
}
