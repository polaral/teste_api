const express = require('express')
const app =express ()
const bodyParser = require ('body-parser') 
const port = 3000 //portao padrao

    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());

 const router = express.Router();
 router.get('/', (req, res) => res.json({message: 'funcionando!'}));

    //GET / aplaicarDesconto

router.get('/aplicarDesconto/:valor/:desconto', (req, res) => {
    const valor =parseInt(req.params.valor)
    const desconto = parseInt(req.params.desconto)
    res.json({valorDescontado: (valor - desconto)})
})

    app.use('/', router)
        if(require.main === module){
            //inici o servidor
    app.listen(port)
 console.log('API funcionando!')
        }

module.exports = app