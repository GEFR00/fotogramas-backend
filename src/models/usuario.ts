import { Foto } from "./foto";

export class Usuario {
    public nombreUsuario: string;
    public email: string;
    public password?: string;
    public fechaRegistro: Date;
    public fotoPerfil: string;
    public seguidores: Usuario[];
    public siguiendo: Usuario[];
    public fotosSubidas: Foto[];

    constructor(
        nombreUsuario: string, 
        email: string,
        password: string, 
        fechaRegistro: Date, 
        fotoPerfil: string, 
        seguidores: Usuario[], 
        siguiendo: Usuario[], 
        fotosSubidas: Foto[]
    ) {
        this.nombreUsuario = nombreUsuario;
        this.email = email;
        this.password = password;
        this.fechaRegistro = fechaRegistro;
        this.fotoPerfil = fotoPerfil;
        this.seguidores = seguidores;
        this.siguiendo = siguiendo;
        this.fotosSubidas = fotosSubidas;
    }

}