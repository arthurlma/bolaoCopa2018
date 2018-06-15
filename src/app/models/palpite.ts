import { Jogo } from './jogo';
import { Selecao } from './selecao';

export class Palpite {
    usuarioId: string = null;
    bolaoId: string = null;
    jogos: Jogo[] = null;
    oitavasSelecoes: Selecao[] = null;
    quartasSelecoes: Selecao[] = null;
    semisSelecoes: Selecao[] = null;
    campeão: Selecao = null;
    vice: Selecao = null;
    // terceiroSelecoes: Selecao = null;
    pontuacao: number = null;


    constructor(values: Object = {}) {
        Object.keys(this).forEach(key => {
            if (values.hasOwnProperty(key))
                this[key] = values[key];
        });
    }
}
