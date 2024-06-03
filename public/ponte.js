document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.curso').forEach(curso => {
        let conta = 0;
        const addButao = curso.querySelector('.add');
        const calButao = curso.querySelector('.cal');
        const inputConteiner = curso.querySelector('.conteiner');
        const resultdiv = curso.querySelector('.resultado');

        addButao.addEventListener('click', function() {
            if (conta < 1) {
                conta++;
                const novoinput = document.createElement('input');
                novoinput.type = 'number';
                novoinput.name = `num${conta}`;
                novoinput.placeholder = `Número ${conta}`;
                inputConteiner.appendChild(novoinput);
            } else {
                alert("Limite atingido");
            }
        });

        calButao.addEventListener('click', function() {
            const formData = new FormData(curso.querySelector('.formC'));
            fetch('/calcular', {
                method: 'POST',
                body: formData
            })
            .then(response => response.text())
            .then(data => {
                console.log('Resultado recebido do servidor:', data);  // Log para depuração
                resultdiv.innerHTML = `Resultado: ${data}`;
            })
            .catch(error => console.error('Erro', error));
        });
    });
});
