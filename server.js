// <COMENTARIO QUE SE DESCRIBE EN EL PUNTO 6>
const http = required('http')
const server = http.createServer((peticion, respuesta) => {
    respuesta.writeHead(200, {'Content-Type': 'text/plain'})
    respuesta.end("Hola mundo")
})
server.listen(3000)