
// Referencias del HTML
const lblOnline  = document.querySelector('#lblOnline');
const lblOffline = document.querySelector("#lblOffline");
const txtMensaje = document.querySelector("#txtMensaje");
const btnEnviar  = document.querySelector("#btnEnviar");

// socket mantiene la comunicacion con nuestro servidor
const socket = io();


// Listener 
socket.on('connect', ()=>{
    //console.log('Conectado');

    lblOffline.style.display = "none";
	lblOnline.style.display = "";
});

socket.on("disconnect", () => {
	//console.log("Desconectado");

	lblOffline.style.display = "";
	lblOnline.style.display = "none";
});

socket.on("enviar-mensaje", ( payload ) =>{
    console.log( payload );
});

btnEnviar.addEventListener('click', () => {
    const mensaje = txtMensaje.value;
    const payload = {
        mensaje,
        id: "1234",
        fecha: new Date().getTime(), 
    }
    socket.emit( 'enviar-mensaje', payload, (id) => {
        console.log("Desde el server ", id);
    } );
});

