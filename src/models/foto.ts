import { Comentario } from "./comentario";
import { Usuario } from "./usuario";

export class Foto {
    public id: number;
    public ruta: string;
    public descripcion: string;
    public hashtags: string[];
    public fechaSubida: Date;
    public usuario: Usuario;
    public meGusta: Usuario[];
    public comentario: Comentario[];

    constructor(
        id: number,
        ruta: string,
        descripcion: string,
        hashtags: string[],
        fechaSubida: Date,
        usuario: Usuario,
        meGusta: Usuario[],
        comentario: Comentario[]
    ) {
        this.id = id;
        this.ruta = ruta;
        this.descripcion = descripcion;
        this.hashtags = hashtags;
        this.fechaSubida = fechaSubida;
        this.usuario = usuario;
        this.meGusta = meGusta;
        this.comentario = comentario;
    }
}