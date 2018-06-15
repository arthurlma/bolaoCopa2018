export class Selecao {
    id: string = null;
    iconNome: string = null; 
    nome: string = null;
    // Jogos: number = 0;
    pontos: number = 0;
    vitorias: number = 0;
    empates: number = 0;
    derrotas: number = 0;
    gp: number = 0;
    gc: number = 0;
    sg: number = 0;


    constructor(values: Object = {}) {
        Object.keys(this).forEach(key => {
            if (values.hasOwnProperty(key))
                this[key] = values[key];
        });
    }
}
