// Authors: Dicter Tadeo Garcia Rosas - dicter.r26@ciencias.unam.mx, Aldo Iván García Salman - salman@ciencias.unam.mx , Raul Llamosas Alvarado - raul.llamosa182@gmail.com
const http = required('http')
const server = http.createServer((peticion, respuesta) => {
    respuesta.writeHead(200, {'Content-Type': 'text/plain'})
    respuesta.end("Hola mundo")
})
server.listen(3000)