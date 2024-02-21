//Express lib
const express = require('express')
//Função do express
const app = express()
//Caminho relativo
const path = require('path')
//Criando Rotas
const router = express.Router()

//Criando função da rota
router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname+'/index.html'))
    console.log(__dirname)
    console.log("index")
})

//Criando outra rota
router.get('/sobre', function(req, res) {
    console.log(Sobre)
    res.sendFile(path.join(__dirname+ '/sobre.html'))
})

router.get('/mainPerf', function(req, res) {
    console.log(mainPerf)
    res.sendFile(path.join(__dirname+ '/mainPerf.html'))
})

router.get('/leMale', function(req, res) {
    console.log(leMale)
    res.sendFile(path.join(__dirname+ '/leMale.html'))
})

router.get('/bleuDe', function(req, res) {
    console.log(bleuDe)
    res.sendFile(path.join(__dirname+ '/bleuDe.html'))
})

app.use("/", router)
app.listen(process.env.port || 3000)

console.log("Server rodando")