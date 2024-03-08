const botonEnviar = document.getElementById('subir');
const parrafoAdvertencia = document.getElementById('texto');

botonEnviar.addEventListener("click", () => {
    parrafoAdvertencia.innerText = 'Enviaste este formulario aceptando nuestras politicas de condiciones';
    botonEnviar.innerText = 'Enviado';    
    botonEnviar.disable = true;
});