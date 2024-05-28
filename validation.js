/**
 * FUNÇÃO PARA FAZER A VALIDAÇÃO DO FORMULARIO ANTES DE SER ENVIADO AO BACK-END
 * @returns 
 */
const sendForm = () => {

    var fullNameInput = document.getElementById('fullName');
    var emailInput = document.getElementById('email');
    var birthdayInput = document.getElementById('birthday');
    var sexyInput = document.querySelector('input[name="sexy"]:checked');

    var maritalStatusInput = document.getElementById('maritalStatus');
    var interestInput = document.getElementById('interest');

    // VERIFICAÇÃO DE NOME
    if (fullNameInput.value.length < 15) {
        alert("o Nome completo deve possuir no mínimo 15 caracteres");
        fullNameInput.focus();
        return false;
    }
    // VERIFICAÇÃO DE EMAIL
    if (emailInput.value.length < 10) {
        alert('O e-mail deve ter pelo menos 10 caracteres.');
        emailInput.focus();
        return false;
    }
    if (emailInput.value.indexOf('@') === -1 || emailInput.value.indexOf('.') === -1) {
        alert('O e-mail deve conter "@" e ".".');
        emailInput.focus();
        return false;
    }
    // VERIFICAÇÃO DE NASCIMENTO
    if (birthdayInput.value.length < 10) {
        alert('Informe a data de Nascimento.');
        birthdayInput.focus();
        return false;
    }
    // VERIFICAÇÃO DE NASCIMENTO
    if (maritalStatusInput.value === 'Solteiro(a)') {
        const idade = calcularIdade();

        if(idade < 15){
            alert('A pessoa Solteira precisa ter mais de 15 anos');
            birthdayInput.focus();
            return false;
        }
    }
    
    // VERIFICAÇÃO DE SEXO
    if (!sexyInput) {
        alert('Informe o sexo!');
        var sexyLabel = document.getElementById('sexyLabel');

        sexyLabel.focus();
        return false;
    }
    // VERIFICAÇÃO DE  AREA DE INTERESSE
    if (interestInput.value === '') {
        alert('Informe a suas Areas de Interesse!');
        interestInput.focus();
        return false;
    }

    alert("#### Formulário enviado com sucesso! ####");
    document.getElementById('myForm').reset();
}

function calcularIdade() {
    // Captura o valor do campo de data de nascimento
    var birthdayInput = document.getElementById('birthday').value;
    // Divide a string da data de nascimento em dia, mês e ano
    var partes = birthdayInput.split('/');
    var dia = parseInt(partes[0], 10);
    var mes = parseInt(partes[1], 10) - 1;
    var ano = parseInt(partes[2], 10);

    // Cria um objeto Date para a data de nascimento
    var dataNascimento = new Date(ano, mes, dia);
    var hoje = new Date();

    // Calcula a idade
    var idade = hoje.getFullYear() - dataNascimento.getFullYear();
    var mesAniversario = hoje.getMonth() - dataNascimento.getMonth();

    // Ajusta a idade se o aniversário ainda não tiver ocorrido este ano
    if (mesAniversario < 0 || (mesAniversario === 0 && hoje.getDate() < dataNascimento.getDate())) {
        idade--;
    }

    return idade;
}