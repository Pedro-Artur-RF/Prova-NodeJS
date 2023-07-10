//IMPORTS

const http = require('http')
const url = require('url')
const fs = require('fs')
const os = require('os')
const path = require('path')

//ATIVIDADE 1


// const PORT = 5000

// const server = http.createServer((req, res) =>{
//     res.end();
// })


//ATIVIDADE 2

// const MyPath = 'https://al.senai.br/cursos/tecnico-em-informatica-para-internet/planodecurso.pdf'

// console.log(path.parse(MyPath))

//ATIVIDADE 3


// const MyUrl = url.format({
//     protocol: 'https:',
//     host: 'nodejs.org',
//     hostname: null,
//     hash: '#url_new_url_input_base',
//     search: null,
//     pathname: '/api/url.html',
//     path: '/api/url.html'
// }

// )

// console.log(MyUrl)

//ATIVIDADE 4
// fs.rename('antigo.txt', 'novo.txt', (err)=>{
//     if(err) throw err;
//     console.log('Novo Arquivo criado');
// })


//PARA ESSE CÓDIGO É NESCESSÁRIO UM ARQUIVO EXTERNO, MAS SEGUNDO O PROFESOR O ARQUIVO NÃO É NECESSARIO POIS, AO VER O CÓDIGO É IDENTIFICAVEL QUE ELE FUNCIONA, LOGO O ARQUITO 'antivo.txt', NÃO ESTÁ PRESENTE

//ATIVIDADE 5

//console.log(os.cpus())