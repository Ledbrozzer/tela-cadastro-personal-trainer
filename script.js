document.getElementById('Personal Form'). addEventListener('submit', function(event) {
    event.preventDefault();

    const codigoPersonal = document.getElementById('codigoPersonal').value;
    const nomePersonal = document.getElementById('nomePersonal').value;
    const emailPersonal = document.getElementById('emailPersonal').value;

    const Personal = {
    codigoPersonal: codigoPersonal,
    nomePersonal: nomePersonal,
    emailPersonal: emailPersonal
};

    fetch('http://localhost3000/addPersonal', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(Personal)
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById('mensagem').textContent = data;
        document.getElementById('contatoForm').reset();
    })
    .catch(error => {
        document.getElementById('mensagem').textContent = 'Erro ao adicionar contato: ' + error;
    });
});