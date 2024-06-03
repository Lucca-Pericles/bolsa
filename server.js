const express = require('express');
const multer = require('multer');

const app = express();
const port = 4000;

// Configuração para servir arquivos estáticos
app.use(express.static('public'));

// Configuração para processar dados de formulário
const upload = multer();

// Endpoint para processar o cálculo
app.post('/calcular', upload.none(), (req, res) => {
    const num1 = parseFloat(req.body.num1);


    if (isNaN(num1)) {
        res.status(400).send('Entrada inválida');
        return;


    }
    let resultado;

   if (num1 >= 500 && num1 <= 600){
     resultado = (num1 * 50)/100;


   } else if (num1 >= 600 && num1 <= 700){
     resultado = (num1 *60)/100;


    } else if (num1 >= 700 && num1 <= 800){
     resultado = (num1*70) /100;
        
    

    } else if (num1 >= 800 && num1 <= 900){
    resultado = (num1*80) / 100;

    } else if (num1 >= 900 && num1 <= 990){
    resultado = (num1*90) / 100;}

    else if (num1 >=990 && num1 <= 1000){
        resultado = (num1*100) / 100;
    } else{  res.status(400).send('Sem desconto');
    return;}

   

 
    
   console.log('Número recebido:', num1);  // Log para depuração
   console.log('Resultado calculado:', resultado);  // Log para depuração


    res.send(resultado.toString());


});
// Inicializa o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
