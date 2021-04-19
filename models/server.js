const express = require("express");
const cors = require("cors");


class Server {
	constructor() {
		this.app = express();
		this.port = process.env.PORT || 3000;

		this.paths = {};		

		// Middlewares
		this.middlewares();

		// Rutas de mi aplicacion
		this.routes();
	}

	async conectarDB() {
		await dbConnection();
	}

	routes() {
		
        //this.app.use(this.paths.auth, require("../routes/auth"));		
	}

	middlewares() {
		// Cors
		this.app.use(cors());		

		// Directorio Público
		this.app.use(express.static("public"));
		
	}

	listen() {
		this.app.listen(this.port, () => {
			console.log(`Example app listening at http://localhost:${this.port}`);
		});
	}
}

module.exports = Server;
