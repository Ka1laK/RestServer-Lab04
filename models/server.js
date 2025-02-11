const express = require('express')
const cors = require('cors')
const { dbConnection } = require('../database/config.js')

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';
        //lamada a la base de datos
        this.conectarDB();
        //Middelware
        this.middlewares();
        //Rutas de la aplicacion
        this.routes();
        

    }

    async conectarDB() {
        await dbConnection();
    }


    
    //aque se define el metodo middleware que publicara la carpeta public
    middlewares(){
        //CORS
        this.app.use(cors());
        //lectura y parseo del body recibe lo que se envia
        this.app.use(express.json());
        //directorio publico
        this.app.use(express.static('public'));

    }




    routes() {
        this.app.use(this.usuariosPath, require('../routers/user.js'));
    }







    listen() {

        this.app.listen(this.port, () =>{
            console.log('Servidor corriendo en puerto ',this.port)
        })
    }

}

module.exports = Server;
