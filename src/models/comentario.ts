import { Usuario } from "./usuario";

export class Comentario {
    public id: number;
    public texto: string;
    public fecha: Date;
    public usuario: Usuario;

    constructor(id: number, texto: string, fecha: Date, usuario: Usuario) {
        this.id = id;
        this.texto = texto;
        this.fecha = fecha;
        this.usuario = usuario;
    }
}