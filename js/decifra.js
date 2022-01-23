var selecao = document.querySelector('#selecao');
selecao.addEventListener('input', function () {
    var cdc = document.querySelector('#cdc');
    if (selecao.value != 'cdc') {
        cdc.style.display = ('none')
    } else {
        cdc.style.display = ('block')
    }
})
var b64 = document.querySelector('#b64');

var btn = document.querySelector('.btn');
var codificar = document.querySelector('.radioCodi')
codificar.addEventListener('click', function () {
    var radioBtn = document.getElementsByName('codi')
    for (var i = 0; i < radioBtn.length; i++) {
        if (radioBtn[i].checked && radioBtn[i].value == 'Codificar' && selecao.value != 'cdc') {
            btn.value = radioBtn[i].value
            btn.onclick = function () {
                var codigo = suaMensagem.value;
                var msgCodificada = btoa(codigo);
                suaResposta.innerHTML = msgCodificada;
            }
        } else if (radioBtn[i].checked && radioBtn[i].value == 'Codificar' && selecao.value == 'cdc'){
            btn.value = radioBtn[i].value
        }
    }
})
var decodificar = document.querySelector('.radioDecodi')
decodificar.addEventListener('click', function () {
    var radioBtn = document.getElementsByName('codi')
    for (var i = 0; i < radioBtn.length; i++) {
        if (radioBtn[i].checked && radioBtn[i].value == 'Decodificar' && selecao.value != 'cdc' ) {
            btn.value = radioBtn[i].value
            btn.onclick = function () {
                var decodifica = suaMensagem.value;
                var msgDecodificada = atob(decodifica);
                suaResposta.innerHTML = msgDecodificada;
            }
        } else if (radioBtn[i].checked && radioBtn[i].value == 'Decodificar' && selecao.value == 'cdc'){
            btn.value = radioBtn[i].value
        }
    }

})
var suaMensagem = document.querySelector('#mensagem');
var codigo = suaMensagem.value;
var suaResposta = document.querySelector('#resposta');
