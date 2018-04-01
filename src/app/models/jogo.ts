export class Jogo {
    selecao1: string = null;
    selecao2: string = null;
    placar1: number = null;
    placar2: number = null;
    pontosSelecao1: number = null;
    pontosSelecao2: number = null;
    vitoriaSelecao1: number = null;
    vitoriaSelecao2: number = null;
    empateSelecao1: number = null;
    empateSelecao2: number = null;
    derrotaSelecao1: number = null;
    derrotaSelecao2: number = null;


    constructor(values: Object = {}) {
        Object.keys(this).forEach(key => {
            if (values.hasOwnProperty(key))
                this[key] = values[key];
        });
    }
}
