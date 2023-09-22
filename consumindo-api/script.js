async function buscaEndereco(cep) {

    var mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = "";
    try{
        var consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        var consultaCepConvertida = await consultaCep.json();
        if(consultaCepConvertida.erro){
            throw Error('CEP não exitente!');
        }
        var cidade = document.getElementById('cidade');
        var logradouro = document.getElementById('endereco');
        var estado = document.getElementById('estado');
        var numero = document.getElementById('numero');
        var complemento = document.getElementById('complemento');
        var bairro = document.getElementById('bairro');

        cidade.value = consultaCepConvertida.localidade;
        logradouro.value = consultaCepConvertida.logradouro;
        estado.value = consultaCepConvertida.uf;
        numero.value = consultaCepConvertida.siafi;
        complemento.value = consultaCepConvertida.complemento;
        bairro.value = consultaCepConvertida.bairro;

        console.log(consultaCepConvertida);
        return consultaCepConvertida;
    }
    catch(erro) {
        mensagemErro.innerHTML = `<p>Cep Inválido. Tente Novamente</p>`
        console.log(erro);
    }
}

var cep = document.getElementById('cep');
cep.addEventListener('focusout', () => buscaEndereco(cep.value));
