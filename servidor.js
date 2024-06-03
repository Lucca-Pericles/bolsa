const express = require('express');
const multer = require('multer');

const app = express();
const port = 3000;

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

    // Exemplo de cálculo simples (dobrar o número)
    const resultado = num1 * 2;
    console.log('Número recebido:', num1);  // Log para depuração
    console.log('Resultado calculado:', resultado);  // Log para depuração

    res.send(resultado.toString());
});

// Inicializa o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
