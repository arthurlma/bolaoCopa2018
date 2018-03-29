export class Jogo {
    selecao1: string = null;
    selecao2: string = null;
    placar1: number = 0;
    placar2: number = 0;
    pontosSelecao1: number = 0;
    pontosSelecao2: number = 0;


    constructor(values: Object = {}) {
        Object.keys(this).forEach(key => {
            if (values.hasOwnProperty(key))
                this[key] = values[key];
        });
    }
}
