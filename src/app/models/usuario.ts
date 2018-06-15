import { Palpite } from './palpite';

export class Usuario {
    uid: string;
    email: string;
    photoURL?: string;
    displayName?: string;
    // id: string = null;
    // email: string = null;
    // nome: string = null;
    palpites?: Palpite[] = null;
    bolaoIds?: string[] = null;


    constructor(values: Object = {}) {
        Object.keys(this).forEach(key => {
            if (values.hasOwnProperty(key))
                this[key] = values[key];
        });
    }
}
