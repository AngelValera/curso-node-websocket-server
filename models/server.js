const express = require("express");
const cors = require("cors");
const { socketController } = require("../sockets/controller");


class Server {
	constructor() {
		this.app    = express();
		this.port   = process.env.PORT || 3000;
		this.server = require("http").createServer(this.app);
		this.io     = require('socket.io')(this.server);
		
		this.paths = {};		

		// Middlewares
		this.middlewares();

		// Rutas de mi aplicacion
		this.routes();

		// Configuración de Sockets
		this.sockets();

	}

	async conectarDB() {
		await dbConnection();
	}

	routes() {
		
        //this.app.use(this.paths.auth, require("../routes/auth"));		
	}

	sockets(){

		this.io.on('connection', socketController);
	}


	middlewares() {
		// Cors
		this.app.use(cors());		

		// Directorio Público
		this.app.use(express.static("public"));
		
	}

	listen() {
		this.server.listen(this.port, () => {
			console.log(`Example app listening at http://localhost:${this.port}`);
		});
	}
}

module.exports = Server;
