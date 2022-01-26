var selecao = document.querySelector('#selecao');
var b64 = document.querySelector('#b64');
var btn = document.querySelector('.btn');
var codificar = document.querySelector('.radioCodi');
var decodificar = document.querySelector('.radioDecodi');
var suaMensagem = document.querySelector('#mensagem');
var suaResposta = document.querySelector('#resposta');
var key = document.querySelector('#key').value;
var cdc = document.querySelector('#cdc');

cdc.addEventListener("change", function () {
    key = document.getElementById("key").value;
});

selecao.addEventListener('input', function () {

    if (selecao.value != 'cdc') {
        cdc.style.display = ('none')
    } else {
        cdc.style.display = ('block')
    }
});

codificar.addEventListener('click', function () {
    var radioBtn = document.getElementsByName('codi')
    for (var i = 0; i < radioBtn.length; i++) {
        if (radioBtn[i].checked && radioBtn[i].value == 'Codificar' && selecao.value == 'b64') {
            btn.value = radioBtn[i].value
            btn.onclick = function () {
                var codigo = suaMensagem.value;
                var msgCodificada = btoa(codigo);
                suaResposta.innerHTML = msgCodificada;
            }
        } else if (radioBtn[i].checked && radioBtn[i].value == 'Codificar' && selecao.value == 'cdc') {
            btn.value = radioBtn[i].value
            btn.addEventListener('click', function () {
                var mensagem = suaMensagem.value;
                mensagem = mensagem.split("");
                key = parseInt(key, 10);
                var codigo = "";
                for (var i = 0; i < mensagem.length; i++) {
                    var charCode = mensagem[i].charCodeAt();
                    if (charCode >= 65 && charCode <= 90) {
                        codigo += String.fromCharCode(((charCode + key - 65) % 26) + 65);
                    } else if (charCode >= 97 && charCode <= 122) {
                        codigo += String.fromCharCode(((charCode + key - 97) % 26) + 97);
                    } else {
                        codigo += mensagem[i];
                    }
                }
                resposta.innerText = codigo;
            })
        }

    }
});

decodificar.addEventListener('click', function () {
    var radioBtn = document.getElementsByName('codi')
    for (var i = 0; i < radioBtn.length; i++) {
        if (radioBtn[i].checked && radioBtn[i].value == 'Decodificar' && selecao.value != 'cdc') {
            btn.value = radioBtn[i].value
            btn.onclick = function () {
                var decodifica = suaMensagem.value;
                var msgDecodificada = atob(decodifica);
                suaResposta.innerHTML = msgDecodificada;
            }
        } else if (radioBtn[i].checked && radioBtn[i].value == 'Decodificar' && selecao.value == 'cdc') {
            btn.value = radioBtn[i].value
        }
    }
});

