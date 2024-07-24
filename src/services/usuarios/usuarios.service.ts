import { Injectable } from '@nestjs/common';
import { Usuario } from 'src/models/usuario';

@Injectable()
export class UsuariosService {

    private usuarios: Usuario[] = [];

    // Verificar si existe el usuario según el correo ingresado y que el nombreUsuario sea único)
    crearUsuario( usuario: Usuario ): void {
        const existeUsuario = this.usuarios.find(user => 
            user.email == usuario.email &&
            user.nombreUsuario == usuario.nombreUsuario
        );

        if( !existeUsuario ) {
            this.usuarios.push(usuario);
        }
    }

    // Obtener un usuario según su nombreUsuario
    obtenerUsuarioPorNombreUsuario( nombreUsuario: string ): Usuario {
        const usuario = this.usuarios.find( 
            usuario => usuario.nombreUsuario == nombreUsuario 
        );
        return usuario ? usuario : null;
    }

    // Obtener todos los usuarios (Excluir la password en la lista )
    obtenerUsuarios(): Usuario[] {
        return this.usuarios.map( usuario => {
            return {
                nombreUsuario: usuario.nombreUsuario,
                email: usuario.email,
                fechaRegistro: usuario.fechaRegistro,
                fotoPerfil: usuario.fotoPerfil,
                seguidores: usuario.seguidores,
                siguiendo: usuario.siguiendo,
                fotosSubidas: usuario.fotosSubidas
            }
        });
    }

    //Eliminar un usuarios según su nombreUsuario
    eliminarUsuario( nombreUsuario: string ): void {
        this.usuarios.forEach((usuario) => {
            if(usuario.nombreUsuario == nombreUsuario) {
                this.usuarios.splice(usuario.nombreUsuario.indexOf(nombreUsuario) - 1, 1);
            }
        })
    }

    // Editar foto de perfil (Solo debe permitir actualizar este campo)
    editarFotoPerfil( nombreUsuario: string, fotoPerfil: string ): boolean {
        const existeUsuario = this.obtenerUsuarioPorNombreUsuario(nombreUsuario);

        if(existeUsuario) {
            existeUsuario.fotoPerfil = fotoPerfil;
            return true;
        } else {
            return false;
        }
    }

    // Seguir a un usuario (Debe validar que el usuario al que se desea seguir exista y que
    // no tenga como seguidor al usuario solicitante )
    seguirUsuario( nombreUsuario: string, nombreUsuarioSeguir: string ): boolean {
        const usuario = this.obtenerUsuarioPorNombreUsuario(nombreUsuario);
        const usuarioASeguir = this.obtenerUsuarioPorNombreUsuario(nombreUsuarioSeguir);

        if( usuario && usuarioASeguir ) {
            if( !usuario.seguidores.includes(usuarioASeguir) ) {
                usuario.siguiendo.push(usuarioASeguir);
                return true;
            }
        }
        return false;
    }




}
