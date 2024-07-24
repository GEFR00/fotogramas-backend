import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { Response } from 'express';
import { Usuario } from 'src/models/usuario';
import { UsuariosService } from 'src/services/usuarios/usuarios.service';

@Controller('usuarios')
export class UsuariosController {

    constructor( private readonly servicio: UsuariosService) {}

    //Registrar nuevo usuario
    @Post()
    crearUsuario( @Body() usuario: Usuario, @Res() res: Response ): void {
        this.servicio.crearUsuario(usuario);
        res.status(HttpStatus.CREATED).send();
    };

    // Obtener usuario según nombreUsuario, en caso de que el usuario no exista devolver el código 404.
    @Get(':nombreUsuario')
    obtenerUsuario( @Param('nombreUsuario') nombreUsuario: string, @Res() res: Response ): void {
        const usuario = this.servicio.obtenerUsuarioPorNombreUsuario(nombreUsuario);

        if( usuario ) {
            res.status(HttpStatus.OK).json(usuario);
        } else {
            res.status(HttpStatus.NOT_FOUND).send();
        }
    }

    // Obtener todos los usuarios
    @Get()
    obtenerUsuarios( @Res() res: Response ): void {
        const usuarios = this.servicio.obtenerUsuarios();
        res.status(HttpStatus.OK).json(usuarios);
    }

    // Eliminar un usuario según su nombreUsuario
    @Delete(':nombreUsuario')
    eliminarUsuario( @Param('nombreUsuario') nombreUsuario: string, @Res() res: Response ): void {
        this.servicio.eliminarUsuario(nombreUsuario);
        res.status(HttpStatus.OK).send();
    }

    // Editar foto de perfil
    @Put(':nombreUsuario')
    editarFotoPerfil( 
        @Param('nombreUsuario') nombreUsuario: string, 
        @Body('fotoPerfil') fotoPerfil: string, 
        @Res() res: Response 
    ): void {

        const resultado = this.servicio.editarFotoPerfil(nombreUsuario, fotoPerfil);

        if(resultado) {
            res.status(HttpStatus.OK).send();
        } else {
            res.status(HttpStatus.NOT_FOUND).send();
        }
    }

    // Seguir a un usuario
    @Put(':nombreUsuario/seguir')
    seguirUsuario( 
        @Param('nombreUsuario') nombreUsuario: string, 
        @Body('nombreUsuarioSeguir') nombreUsuarioSeguir: string, 
        @Res() res: Response 
    ): void {

        const resultado = this.servicio.seguirUsuario(nombreUsuario, nombreUsuarioSeguir);

        if(resultado) {
            res.status(HttpStatus.OK).send();
        } else {
            res.status(HttpStatus.NOT_FOUND).send();
        }
    }



}
